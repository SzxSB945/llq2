/**
 * login:汇易享服务器登陆获取cookies
 * createMeeting:汇易享服务器创建会议接口
 * getUserList:汇易享服务器获取用户信息接口 最高院...高院等等
 * fybhUrl:绵阳值守数据
 * fybmUrl:贵州值守数据
 */

module.exports = {
    login:'http://www.shgbitcloud.com:4004/api/v1/getaccesstoken?data=eSB3cWdwTGNvZyA4IGZnbGV7Y3JrbGUgLiByY3FxdW1wZiA4IDMwMTY3NCB/',
    createMeeting: 'http://120.27.220.137:4004/api/v1/meeting/reserving',
    getUserList:'http://120.27.220.137:4500/api/v1/contact/all?timestamp=',
    fybhUrl:'http://119.23.50.215:9080/iexe/pub/getExecuteDutyData?fybm=',
    fybmUrl:'http://202.98.222.179:9085/iexe/pub/getExecuteDutyData?fybm='
}