# 网易云音乐网页版移动端（vue3+ts）

## 项目整体构建思路及解决方案

### 移动端适配问题

```javascript
function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  // 最大ipad pro 1024
  if (deviceWidth >= 1024) {
    deviceWidth = 1024
  }
  // 最小iphone se 320
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // 个人本地开发习惯使用375*667 此处设置1rem = 50px 后续开发元素单位都使用rem
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
  document.querySelector("body").style.fontSize = 0.5 + "rem"
}

remSize()

window.onresize = function () {
  remSize()
}
```



### 公共模块

<img src="/Users/img/WechatIMG52.jpeg" alt="WechatIMG52" style="zoom:33%;" />

> 顶部：左侧个人主页图标，以及点击显示的个人主页
>
> 底部：播放模块，和下方发现，播客，我的，关注，云村
>
> - 以上属于公共模块，需要配置嵌套路由，***注意父亲组件要记得写router-view***
> - 同时注意到y轴滚动条不包括顶部和底部，所以内容主体部分要与顶部和底部的公共模块隔离，本人设置公共模块fix定位，同时App.vue中通过margin和calc计算页面主体部分
> - 效果图如下：（注意右侧滚动条）
> - <img src="/Users/kap/Kapture 2021-09-16 at 05.58.48.gif" alt="Kapture 2021-09-16 at 05.58.48" style="zoom:50%;" />
>
> 

























