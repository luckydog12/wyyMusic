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

<img src="http://luckydog314.ltd:8080/pic/home.jpeg" alt="WechatIMG52" style="width: 30%;" />

> 顶部：左侧个人主页图标，以及点击显示的个人主页
>
> 底部：播放模块，和下方发现，播客，我的，关注，云村
>
> - 以上属于公共模块，需要配置嵌套路由，***注意父亲组件要记得写router-view***
> - 同时注意到y轴滚动条不包括顶部和底部，所以内容主体部分要与顶部和底部的公共模块隔离，本人设置公共模块fix定位，同时App.vue中通过margin和calc计算页面主体部分
> - 效果图如下：（注意右侧滚动条）
> - <img src="http://luckydog314.ltd:8080/pic/homeDemo.gif" alt="Kapture 2021-09-16 at 05.58.48" style="max-width:30%;" />
>
> - 底部bottom根据原型图，这里采用flex布局，由于页面其他部分也会大量使用flex布局，所以定义全局样式并引入，例如：
>
> - ```css
>   .flex-row-spaceBetween {
>     display: flex;
>     align-items: center;
>     justify-content: space-between;
>   }
>   
>   .flex-row-spaceAround {
>     display: flex;
>     align-items: center;
>     justify-content: space-around;
>   }
>   
>   .flex-col-spaceAround {
>     display: flex;
>     flex-direction: column;
>     align-items: center;
>     justify-content: space-around;
>   }
>   ```
>
> - 静态底部导航栏搭建好后，通过路由跳转跳转到各个页面，并通过当前路由路径及***v-if***,***v-else-if***控制不同页面的顶部内容：
>
> - ```vue
>   <HomeHead v-if="nowRoutePath === '/home'" />
>   <BokeHead v-else-if="nowRoutePath === '/boke'" />
>   <MyHead v-else-if="nowRoutePath === '/my'" />
>   <FollowHead v-else-if="nowRoutePath === '/follow'" />
>   <YuncunHead v-else-if="nowRoutePath === '/yuncun'" />
>   ```
>
> - 为了便于开发维护，采用组件的方式引入，整体效果图如下：
>
> - <img src="http://luckydog314.ltd:8080/pic/bottomRouter.gif" style="max-width:30%;" />





### 首页模块

- #### 轮播图

  - 由于之前已经使用过swiper组件处理在vue3中的轮播图，（[例子](https://github.com/luckydog12/wwyMusicOld/blob/master/src/components/Home/Swiper.vue)）（可以直接copy使用）。所以此项目使用另一种方法，vant框架中的swipe轮播：
  - 细节问题：swipe背景颜色以及公共模块主页页面头部要根据轮播图主题颜色变化，处理思路：
    - 通过colorthief提取图片背景颜色
    - 存入vuex中
    - 通过watch监听提取vuex中存放的颜色字段，渲染背景颜色
  - 遇到的问题及解决方案：
    - 在ts中，可能vetur会报错cann't found moudule colorthief，在xxx.d.ts中添加declare module 'colorthief'
    - 通过computed计算属性提取vuex中的值，会由于其返回值为readonly属性，报warning，所以采用watch监听处理
    - 由于轮播图发生改变时才会更改vuex中的数据，所以以后每次初始化进入页面时，第一张图片的背景色永远都是上一次关闭页面或结束进程时存入的值，所以在初始化进入页面时，首先手动将vuex置为空（因为公共模块顶部是保持watch监听vuex中的数据，渲染公共模块顶部需要等待首页页面模块提取颜色，存入vuex中），之后需要使用***异步***的方式等待图片加载完单独执行一次提取当前第一张图片背景颜色，存入vuex
    - canvas跨域问题，设置img标签*crossorigin*="anonymous"（pc端测试没问题，真机调试仍然抱canvas的跨域问题，暂时未找到解决方案）
  - 对应组件路径： src/components/Home/Swiper.vue
  - [点击查看效果图](http://luckydog314.ltd:8080/pic/homeSwipe.gif)： (滚到到最后一张手动刷新页面)

















