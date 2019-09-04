#制定node镜像的版本
FROM keymetrics/pm2:latest
#声明作者
#移动当前目录下面的文件到app目录下
ADD . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
#RUN npm install --production --registry=http://registry.npm.taobao.org 

#RUN npm install pm2 -g

#RUN apk update && apk add ca-certificates && \
#    apk add tzdata && \
#    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
#    echo "Asia/Shanghai" > /etc/timezone

#对外暴露的端口
EXPOSE 80

WORKDIR /app/

#程序启动脚本
CMD ["pm2-runtime","server.js"]
