import { treatenent, highrisk } from './api'
import axios from 'axios'



/**
 * 获取页面数据详情
 */
export const getDetail = url => new Promise((resolve, reject) => {
    axios.get(url).then(Response => {
        if (Response.status == 200) {
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})

/**
 * 会商连线
 * @param {*} type 
 * @param {*} id 
 */
export const getHuishang = url => new Promise((resolve, reject) => {
    instance.get(url).then(Response => {
        if(Response.status == 200){
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})

/**
 * 督查和介入
 * @param {*} type 
 * @param {*} id 
 */
export const getSupervision = (mode,meetingid) => new Promise((resolve, reject) => {
    let url = `/sfj/${mode}/${meetingid}`
    instance.get(url).then(Response => {
        if(Response.status == 200){
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})

/**
 * 获取110警情
 */
export const getTreatenent = (type,id) => new Promise((resolve, reject) => {
    instance.get(treatenent(type,id),{start:0,limit:10}).then(Response => {
        if (Response.status == 200) {
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})



/**
 * 获取突发事件
 */
export const getHighRisk = (type,id) => new Promise((resolve, reject) => {
    axios.get(highrisk(type,id)).then(Response => {
        if (Response.status == 200) {
            let latestCase = []
            if (Response.data.emergencies && Response.data.emergencies.length > 1) {
                latestCase = sortByDate(Response.data.emergencies)
            }else{
                latestCase = []
            }
            let result = Response.data
            result.latestCase = latestCase
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})


const instance = axios.create({
    baseURL: 'http://127.0.0.1:1234',
    timeout: 250000,
    validateStatus: function (status) {
        return status < 500;
    },
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        'Accept': 'application/json'
    }
})

export const PostFun = (url, body) => new Promise((resolve, reject) => {
    instance.post(url, body).then(Response => {
        if (Response.status == 200) {
            // if(Response.data.emergencies && Response.data.emergencies.length > 1){
            //     return resolve(Response.data.emergencies[1])
            // }
            return resolve(Response.data)
        } else {
            return reject(`请求接口失败`)
        }
    }).then(error => {
        return reject(error)
    })
})

/**
 * 传入事件返回最新
 * @param {*} arr 
 */
const sortByDate = arr => {
    let date = []
    arr.map((item) => {
        date.push(new Date(item.date).valueOf())
    })
    var max = date.sort(function (a, b) {
        return b - a;
    })[0]
    let result = {}
    arr.map(item => {
        if (new Date(item.date).valueOf() == max) {
            result = item
        }
    })
    return result
}