const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs   = require('fs')
const http = require('http')

app.use(require('koa-static')(path.join(__dirname, './release')))

app.use( async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./release/index.html')
})

const server       = http.createServer(app.callback())
server.listen(3000)

console.log(`服务器启动完成`)