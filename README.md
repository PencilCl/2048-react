# 2048-react
2048 by react
##界面
![Game](https://github.com/PencilCl/readme-images/blob/master/2048-react/game.png)
##Demo
演示地址:[Demo](https://pencilcl.github.io/2048-react/)
##安装相关依赖
```
npm install
```
##启动
####可以在项目目录下执行`webpack`命令，将相关文件打包后打开`dist/index.html`即可看到效果
####也可以启动webpack-dev-server
需要将
```
config.entry.app.unshift("webpack-dev-server/client?http://192.168.199.66:8000");
```
中的`http://192.168.199.66:8000`修改为你自己运行时的地址,比如
```
http://localhost:8000
```
#####然后执行
```
npm start
```
在浏览器中打开刚才修改的地址，即可访问
###注:
项目中对state深拷贝没有使用immutable.js