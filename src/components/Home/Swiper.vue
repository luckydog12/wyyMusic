<template>
  <div class="banners" :style="{ backgroundImage: `linear-gradient(to bottom, ${colorRgba}, rgba(255,255,255,1))` }">
    <van-swipe class="swipe" :autoplay="3000" lazy-render @change="swipeChange">
      <van-swipe-item v-for="item in lists" :key="item.pic">
        <img class="img" :src="item.pic" :id="item.bannerId" alt="404" crossorigin="anonymous" />
        <div class="title" :style="{ backgroundColor: item.titleColor }">{{ item.typeTitle }}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted, watch } from "vue"
import { getBanners } from "../../server/homeApi"
import ColorThief from "colorthief"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    store.dispatch("setHomeBackgroundColor", "")
    const colorThief = new ColorThief()
    let state = reactive({
      colorRgba: "",
      lists: [{ pic: "", typeTitle: "", titleColor: "", bannerId: "" }],
    })
    onMounted(async () => {
      let res = await getBanners({ type: 2 })
      if (res.data.code === 200) {
        state.lists = res.data.banners
      }
      watch(
        () => store.state.homeBackgroundColor,
        (newVal, oldVal) => {
          state.colorRgba = newVal
        },
        {
          immediate: true, // 立即执行
          deep: true, //深度监视
        }
      )
      // 由于vuex会保留上次最后更改的数据 不是当前图片的颜色
      // 刚进入此页面 获取当前图片的主体颜色 更改vuex中的信息
      setTimeout(() => {
        getColor(0)
      }, 0)
    })
    // 轮播图切换触发的函数 通过colorThief获取图片的主题颜色 渲染背景颜色
    const swipeChange = (index: number) => {
      state.colorRgba = ""
      getColor(index)
    }
    const getColor = (index: number) => {
      let nowImgId = state.lists[index].bannerId
      let img = document.getElementById(nowImgId)
      let colorArr = colorThief.getColor(img)
      let storeHomeBackgroundColor = `rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, .1)`
      store.dispatch("setHomeBackgroundColor", storeHomeBackgroundColor)
    }
    return {
      ...toRefs(state),
      swipeChange,
    }
  },
})
</script>

<style lang="less" scoped>
.banners {
  width: 7.5rem;
  transition: all 1s;
  .swipe {
    width: 6.9rem;
    height: 2.8rem;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 0.2rem;

    .van-swipe-item {
      width: 100%;
      height: 100%;
      .img {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .title {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1.1rem;
        height: 0.3rem;
        border-top-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>
