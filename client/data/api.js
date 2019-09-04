/**
 * 概览信息接口
 * @param {数据类型} type 
 * @param {机构id} id 
 */

//const host = `http://rmtj.sfj.sh.gov.cn`

const host = `http://rmtj.sfj.sh.gov.cn`

export const detail = (type,id) => {
    if(type == 'mediate'){
        return `${host}/api/OrgOverview${id ? '?id=' + id : '' }`
    }else{
        if(!id || id == ''){
            return `http://inc.justice.org.cn/monitor/overview.jsp`
        }else{
            return `https://inc.justice.org.cn/monitor/organizations.jsp?id=${id || ''}`
        }
    }
}

/**
 * 下级列表
 * @param {数据类型} type 
 * @param {机构id} id 
 */
export const childIds = (type,id) => {
    if(type == 'mediate'){
        return `${host}/api/lowerLevelOrg${id ? '?id=' + id : '' }`
    }else{

        if(id == '' || !id){
            return `http://inc.justice.org.cn/monitor/organizations.jsp`

        }else{
            return `http://inc.justice.org.cn/monitor/notarialOffice.jsp?id=${id}`
        }
    }
}


/**
 * 高风险事件
 * @param {数据类型} type 
 * @param {机构id} id 
 */
export const highrisk = (type,id) => {
    if(type == 'mediate'){
        return `${host}/api/hignRiskCaseSearch${id ? '?id=' + id : '' }`
    }else{
        return `http://inc.justice.org.cn/monitor/high-risk.jsp?id=${id || ''}`
    }
}

/**
 * 获取指定机构的110警情
 * @param {数据类型} type 
 * @param {机构id} id 
 */
export const treatenent = (type,id) => {
    if(type == 'mediate'){
        return `${host}/api/treatenent${id ? '?id=' + id : '' }`
    }else{
        return `http://inc.justice.org.cn/monitor/high-risk.jsp?id=${id || ''}`
    }
}



/**
 * 视网膜数据接口
 * @param {数据类型} type 
 * @param {机构id} id 
 */
export const retina = (type,id) => {
    if(type == 'mediate'){
        return `${host}/api/retinalInfoSearch?id=${id || ''}`
    }else{
        return `http://inc.justice.org.cn/monitor/retina.jsp?id=${id || ''}`
    }
}




/**
 * 突发事件连线[Windows]
 * @param {数据类型} type 
 */
export const link = type => {
    if(type == 'mediate'){
        return `http://127.0.0.1:1234/sfj/shsf0003`
    }else{
        return `http://127.0.0.1:1234/sfj/shsf0010`
    }
}

/**
 * 获取当前值守
 * @param {数据类型} type 
 */
export const zhishou = type => {
    if(type == 'mediate'){
        return `http://127.0.0.1:1234/duty/meeting/user/shsf0003`
    }else{
        return `http://127.0.0.1:1234/duty/meeting/user/shsf0010`
    }
}

/**
 * 根据会议信息加入会议
 * @param {会号} meeting 
 * @param {密码} password 
 */
export const enterzhishou = (meeting,password) => `http://127.0.0.1:1234/meeting/join/${meeting}/${password}`



/**
 * 临时数据
 */
export const tiaojieJson = {"worker":[{"name":"姓名","value":"张三"}],"currinfo":[{"name":"今日办理","value":"12件"}]}
export const gongzhengJson = {"worker":{"name":"姓名","value":"张磊"},"currinfo":{"name":"今日办理","value":"12件"}}

/**
 * 根据事件发生地不同加入会议
 * @param {数据类型} type 
 */
export const Emergency = (type,username) => {
    // let user = ''
    // if(type == '青浦区司法局徐泾司法所'){
    //     user = 'shsf0006'
    // }else{
    //     user = 'shsf0008'
    // }
    // return `http://127.0.0.1:1234/sfj/${user}`

    // console.log('type%%%%%%%%%%%%%%%%')
    //console.log(type,username)
    if(type == 'mediate'){
        return `http://127.0.0.1:1234/sfj/`+ username
    }else{
        return `http://127.0.0.1:1234/sfj/shsf0010`
    }
}

