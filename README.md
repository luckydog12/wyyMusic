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

window.onresize = function() {
  remSize()
}
```

### 公共模块

<img src="http://luckydog314.ltd:8080/pic/home.jpeg" alt="WechatIMG52" style="width: 30%;" />

> 顶部：左侧个人主页图标，以及点击显示的个人主页
>
> 底部：播放模块，和下方发现，播客，我的，关注，云村
>
> - 以上属于公共模块，需要配置嵌套路由，**_注意父亲组件要记得写 router-view_**
> - 同时注意到 y 轴滚动条不包括顶部和底部，所以内容主体部分要与顶部和底部的公共模块隔离，本人设置公共模块 fix 定位，同时 App.vue 中通过 margin 和 calc 计算页面主体部分
> - 效果图如下：（注意右侧滚动条）
> - <img src="http://luckydog314.ltd:8080/pic/homeDemo.gif" alt="Kapture 2021-09-16 at 05.58.48" style="max-width:30%;" />
>
> - 底部 bottom 根据原型图，这里采用 flex 布局，由于页面其他部分也会大量使用 flex 布局，所以定义全局样式并引入，例如：
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
> - 静态底部导航栏搭建好后，通过路由跳转跳转到各个页面，并通过当前路由路径及**_v-if_**,**_v-else-if_**控制不同页面的顶部内容：
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

  - 由于之前已经使用过 swiper 组件处理在 vue3 中的轮播图，（[例子](https://github.com/luckydog12/wwyMusicOld/blob/master/src/components/Home/Swiper.vue)）（可以直接 copy 使用）。所以此项目使用另一种方法，vant 框架中的 swipe 轮播：
  - 细节问题：swipe 背景颜色以及公共模块主页页面头部要根据轮播图主题颜色变化，处理思路：
    - 通过 colorthief 提取图片背景颜色
    - 存入 vuex 中
    - 通过 watch 监听提取 vuex 中存放的颜色字段，渲染背景颜色
  - 遇到的问题及解决方案：
    - 在 ts 中，可能 vetur 会报错 cann't found moudule colorthief，在 xxx.d.ts 中添加 declare module 'colorthief'
    - 通过 computed 计算属性提取 vuex 中的值，会由于其返回值为 readonly 属性，报 warning，所以采用 watch 监听处理
    - 由于轮播图发生改变时才会更改 vuex 中的数据，所以以后每次初始化进入页面时，第一张图片的背景色永远都是上一次关闭页面或结束进程时存入的值，所以在初始化进入页面时，首先手动将 vuex 置为空（因为公共模块顶部是保持 watch 监听 vuex 中的数据，渲染公共模块顶部需要等待首页页面模块提取颜色，存入 vuex 中），之后需要使用**_异步_**的方式等待图片加载完单独执行一次提取当前第一张图片背景颜色，存入 vuex
    - canvas 跨域问题，设置 img 标签*crossorigin*="anonymous"（pc 端测试没问题，真机调试仍然抱 canvas 的跨域问题，暂时未找到解决方案）
    - 由于顶部与轮播图的背景属于两个模块，为了做到平滑过度，顶部背景图片不设置过度时间，轮播图背景设置 1s 过度时间，同时设置渐变效果
  - 对应组件路径： src/components/Home/Swiper.vue
  - [点击查看效果图](http://luckydog314.ltd:8080/pic/homeSwipe.gif)： (滚到到最后一张手动刷新页面)

- #### 每日推荐、私人 FM 等选项

  - 构建静态页面
  - 细节问题：
    - 每日推荐图标中心部分是每天的日期，使用 new Date().getDate()配合绝对定位即可
    - 组件是可以 x 轴滑动的，但是需要在样式上隐藏 x 轴滚动条，我的处理方式是滚轴宽高设置为 0
    - 调节样式宽度等还是需要一定计算的，此组件路径：src/components/Home/Select.vue，可自行查看
    - 效果图如下:
    - <img src="http://luckydog314.ltd:8080/pic/select.gif" />

- #### 推荐歌单

  - 构建静态页面使用了 swiper 组件，需要注意的安装时建议安装第 6 代版本：npm i swiper@6 -S

  - 关键代码：

  - ```javascript
    onUpdated(() => {
      new Swiper("#playListSwiper", {
        slidesPerView: 3,
        spaceBetween: 10, // 等同于margin-right: 10px
      })
    })
    ```

  - 细节问题：文本溢出处理方式

    - 单行文本溢出-核心 css

    - ```css
      overflow: hidden；
      white-space: nowrap；
      text-overflow: ellipsis；
      ```

    - 多行文本溢出-核心 css （兼容性一般： -webkit-line-clamp 属性只有 webkit 内核的浏览器才支持）

    - ```css
      display: -webkit-box;
      -webkit-line-clamp: 2; // 行数限制
      -webkit-box-orient: vertical;
      // text-overflow: ellipsis;
      // overflow: hidden;
      ```

  - 静态页面其他细节问题不再描述，构建好后，为每个 swiper-slide 绑定点击事件，携带 id 进行路由跳转，当跳转其他路径时，同时注意公共组件部分头部和顶部通过 vif 及:style 动态调整。

  - 对应组件路径: src/components/Home/RecommendedPlaylist

  - [点击查看效果图](http://luckydog314.ltd:8080/pic/recommend.gif)

