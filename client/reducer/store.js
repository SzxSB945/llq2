/** 
 * set initalState
*/
module.exports = {
    mediate    : 'mediate', //mediate为调解页面，unmediate为公证页面
    dataSource : [],      //数据源
    showModal  : 'none' , //信息总汇模态框的开启个关闭
    infoModalX : '600px',
    infoModalY : '670px',//信息总汇模态框的位置
    burstCaseInfo : {
        // name     : '',
        // location : '', // 地址
        // caseType : '', // 事项类型
        // status   : '' ,// 案件状态
        // notary   : '', // 公证员
        // notarialOffice : '', // 公证机构
        // seriesName     : '',//点位类型
    },//突发事件信息
    lastestCase : {

    },//事件栏
    currentAreaName : '北京',//当前区域名称,
    currentJudicalName : '',//当前区域司法所的名称,
    barType : 'caseTotalCount',
    barName : '案件总数',
    basicId : '',//调委会星星的id
    detailModal : false,
    detailType  : '',
    detailSource: []
}

// 辖区在线 officeOnline  
// 调解员在线 staffOnline  
// 辖区信息 officeCount 
// 调解员数量 staffCount 
// 案件总数 caseTotalCount  
// 正在办理 caseInProcessCount
// 今日案件 caseTodayCount  
// 今日案件正在办理 caseTodayInProcessCount
// 紧急案件 emergencyTotalCount

//高风险案件
// 今日新增       highRiskStats_caseTodayTotalCount
// 今日正在办理   highRiskStats_caseTodayInProcessCount
// 案件总数       highRiskStats_caseTotalCount
// 案件总数正在办理 highRiskStats_caseInProcessCount