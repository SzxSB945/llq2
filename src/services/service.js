const mongoose = require('mongoose')
const mongodbUrl = require('../config')


mongoose.connect(mongodbUrl.mongodbUrl,(err)=>{
    if(err){
        console.log(`mongodb数据服务连接失败,失败信息 : ${err}`)
    }else{
        console.log('mongodb数据服务连接成功')
    }
})
