<template>
  <div class="recommendedPlayList">
    <div class="head flex-row-spaceBetween">
      <div class="recommend">推荐歌单</div>
      <div class="more">更多 ></div>
    </div>
    <div class="main">
      <div class="swiper-container" id="playListSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in playList" :key="item.id" @click="handleMusicList(item.id)">
            <img :src="item.picUrl" alt="404" />
            <p class="name">{{ item.name }}</p>
            <div class="count">
              <span class="iconfont icon-play"></span>
              <span>{{ item.playCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUpdated, toRefs } from "vue"
import { getRecommendedPlayList } from "../../server/homeApi"
import { filterCount } from "../../utils/filterCount"
import Swiper, { Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation } from "swiper"
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation])
// swiper-bundle.min.css 决定了小圆点和左右翻页标签，如果不需要可以不引用
import "swiper/swiper-bundle.min.css"
// swiper.less/sass/css 决定了基础的样式
import "swiper/swiper.less"
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      playList: [
        {
          id: 0,
          playCount: "",
          name: "",
          picUrl: "",
        },
      ],
    })
    const handleMusicList = (id: number) => {
      router.push({ path: "/musicList", query: { id } })
    }
    onMounted(async () => {
      let res = await getRecommendedPlayList({ limit: 30 })
      if (res.data.code === 200) {
        state.playList = res.data.result
        state.playList.forEach((item) => {
          // @ts-ignore
          item.playCount = filterCount(item.playCount)
        })
      }
    })
    onUpdated(() => {
      new Swiper("#playListSwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
      })
    })
    return {
      ...toRefs(state),
      handleMusicList,
    }
  },
})
</script>

<style lang="less" scoped>
.recommendedPlayList {
  box-sizing: border-box;
  width: 7.5rem;
  height: 4rem;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  border-bottom: 1px solid #ccc;
  padding: 0 0.3rem;
  .head {
    height: 0.6rem;
    .recommend {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      width: 1.2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      border: 1px solid #ccc;
      font-size: 0.2rem;
      border-radius: 0.5rem;
    }
  }
  .main {
    margin-top: 0.2rem;
    .swiper-container {
      height: 3rem;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          img {
            width: 100%;
            border-radius: 0.2rem;
          }
          // 2行文本溢出会显示省略号
          .name {
            width: 100%;
            font-size: 0.27rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            // text-overflow: ellipsis;
            // overflow: hidden;
          }
          .count {
            position: absolute;
            right: 2px;
            top: 0.1rem;
            color: #ccc;
            font-size: 0.2rem;
            padding: 0 0.1rem;
            background-color: #767473;
            border-radius: 0.2rem;
            .iconfont {
              font-size: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
