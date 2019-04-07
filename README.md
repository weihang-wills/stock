# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)



## 知识点

**前端**

>- 透明渐变的CSS，用rgba(0,0,0,0)，还有各种方向的渐变
>- position：fixed  +  z-index，可以制作弹窗效果
>- flex布局的子内容，只有`width`用具体数值才会精确，用百分比的话会自动给你加间隔
>- 文字一行做缩略，overflow:hidden, text-overflow:ellipsis, white-space:nowrap
>- positon的声明absolute，必须以最近一个父级为基准，如果没有父级声明` position`，则以整个页面为基准


--- 

**云函数**

>- 云函数执行的是index.main方法，所以要通过把main exports出来
>- class可以用三元运算符做判断套用哪个class：class="{{sum<0?'class1':'class2'}}"
