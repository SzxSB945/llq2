const apis  = require('../apis/api')
const axios = require('axios')
const async = require('async')
const CourtModel = global.dbHandle.getModel('fylist')
const GroupModel = global.dbHandle.getModel('group')

/**
 * 获取用户列表并保存
 * 通过await等待执行
 * 1.获取接口中的列表
 * 2.列表处理成mongodb中存储的数据格式
 * 3.存储所有法院的信息
 * 4.找出最高院会议的群组
 * 5.找出高院会议的群组
 * 6.找出中院会议的群组
 * 7.根据群组创建group并更新到人员list
 */
exports.saveCourtList = async () => {
    let list   = await getUserInfoList()
    let courts = await getAllFy(list)
    let createResult = await saveAndUpdateCourt(courts)
    if(createResult != null){
        return
    }
    let group = []
    let zygResult = await createZGYGroup()
    let gyResult  = await createGyGroup(2)
    let zyResult  = await createGyGroup(3)
    let groups = group.concat(zygResult,gyResult,zyResult)
    await createGroup(groups)
    console.log(`创建群组成功`)
}   


/** 
 * 从外网获取法院列表
*/
const getUserInfoList =  () => new Promise((resolve, reject) => {
    console.log('获取信息列表');
    axios.get(`${apis.getUserList}${new Date().valueOf()}`)
    .then(function (response) {
        if (response.data.result == 'success') {
            if (response.data.data.contact) {
                resolve(response.data.data.contact);
            }
        }else{
            resolve([])
        }
    }).catch(function (error) {
        console.log(`从外网获取法院列表数据异常,信息如下:${error}`)
        resolve([])
    });
});

/**
 * 处理法院数组
 * @param {*法院数组} arr 
 */
const getAllFy = arr => new Promise( resolve => {
    let returnArr = [];
    async.mapSeries(arr, (item, callback) => {
        if (item.users) {
            item.users.map(each => {
                returnArr.push({
                    pid: item._id,
                    parentId: item.parentID || '',
                    sortNumber: item.sortNumber,
                    orgName: item.orgName,
                    level: item.level,
                    userName: each.userName,
                    displayName: each.displayName,
                    isMaster: each.isMaster,
                    groupId: []
                });
            });
        }
        callback(null);
    });
    resolve(returnArr);
});


/**
 * 存储或者更新法院信息
 * @param {*} arr 
 */
const saveAndUpdateCourt = arr => new Promise((resolve,reject)=>{
    async.map(arr, (item, callback) => {
        CourtModel.findOne({
            userName: item.userName
        }, (err, result) => {
            if (err) {
                callback({
                    err: err
                });
            }
            if (!result) {
                CourtModel.create(item, err => {
                    if (err) {
                        callback({
                            err: err
                        });
                    }
                    callback(null);
                });
            } else {
                //todo 是否要更新数据
                callback(null);
            }
        });
    }, err => {
        if (err) {
            console.log(`创建用户数据错误，错误信息: ${err}`);
            resolve({
                err:err
            })
        }
        resolve(null)
    })
})

/**
 * 创建最高院群组
 */
const createZGYGroup = () => new Promise(resolve => {
    CourtModel.find({
        level: {
            $in: [1, 2]
        }
    }, (err, result) => {
        if (err) {
            console.log(`查询数据库失败，信息如下: ${err}`)
            resolve([])
        }
        let zgyMeeting = {
            creator: '0zhishou',
            members: []
        }
        result.map(name => {
            zgyMeeting.members.push(name.userName)
        })
        resolve(zgyMeeting)
    })
})


/**
 * 根据level 返回高院和中院群组
 */
const createGyGroup = (level) => new Promise((resolve,reject) => {
    let groups = []
    CourtModel.find({
        "level":level,
        isMaster:true
    },(err,gy) => {
        if(err){
            console.log(`查询数据库失败，信息如下: ${err}`)
            resolve({err:err})
        }
        async.map(gy,(item,callback)=>{
            let members = []
            CourtModel.find({
                $or:[{
                    parentId:item.pid
                },{
                    pid:item.parentId
                }]
            },(err,gyChild)=>{
                if(err){
                    console.log(`查询数据库失败，信息如下: ${err}`)
                    callback({err:err})
                }
                gyChild.map(each => {
                    members.push(each.userName)
                })
                members.push(item.userName)
                groups.push({
                    creator:item.userName,
                    members:members
                })
                callback(null)
            })
        },(err)=>{
            if(err){
                console.log(`获取高院数组失败:${err}`)
                resolve([])
            }
            resolve(groups)
        })
    })
})



/**
 * 数组去重
 */
function arr(arr) {
    var result=[]
    for(var i=0; i<arr.length; i++){
        if(result.indexOf(arr[i])==-1){
        result.push(arr[i])
        }
    }
    return(result)
}


/**
 * 更新所有法院的gourpId数组
 * @param {*} obj 
 */
const UpdateFyGroupId = obj => new Promise((resolve, reject) => {
    let CourtModel = global.dbHandle.getModel('fylist')
    async.map(obj.members, (item, callback) => {
        CourtModel.findOne({
            userName: item
        }, (err, result) => {
            if (err) {
                callback(`查询数据库失败，信息如下: ${err}`)
            }
            if (!result) {
                callback(null)
            }
            let group = result.groupId
            group.push(obj._id.toString())
            CourtModel.update({
                _id: result._id
            }, {
                $set: {
                    groupId: arr(group)
                }
            }, (err) => {
                if (err) {
                    callback(`查询数据库失败，信息如下: ${err}`)
                }
                callback(null)
            })
        })
    }, err => {
        if (err) {
            resolve({
                err:err
            })
        }
        resolve(null)
    })
})

/**
 * 根据群组去创建群组
 * @param {群组} groups 
 */
const createGroup = (groups) => new Promise(resolve => {
    async.mapSeries(groups, (group,callback) => {
       GroupModel.findOne({
           creator:group.creator
       },(err,result) => {
           if(err){
               //todo
           }
           if(!result){
                GroupModel.create(group,(err,create_result)=>{
                    if(err){
                        console.log(`数据库创建失败,失败信息: ${err}`)
                        callback({err:err})
                    }
                     UpdateFyGroupId(create_result).then(rtn => {
                        callback(null)
                     })
                })
           }
           if(result){
                GroupModel.update({_id:result._id},{
                    $set:{
                        members:group.members
                    }
                },(err)=>{
                    if(err){
                        console.log(`数据库更新失败,失败信息: ${err}`)
                        callback({err:err})
                    }
                     UpdateFyGroupId({
                        _id: result._id,
                        members: group.members
                    }).then(rtn => {
                        callback(null)
                     })
                })
           }
       })
    },(err) => {
        if(err){
            console.log(`创建组失败,失败信息: ${err}`)
            resolve(null)
        }
        resolve(null)
    })
})

