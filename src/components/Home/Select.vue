<template>
  <div class="select">
    <div class="container">
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center rili">
          <div class="iconfont icon-calendar"></div>
          <div class="todayDate">{{ todayDate }}</div>
        </div>
        <div class="title">每日推荐</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-icon--1"></div>
        </div>
        <div class="title">私人FM</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-icon--"></div>
        </div>
        <div class="title">歌单</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-paihangbang--"></div>
        </div>
        <div class="title">排行榜</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-15"></div>
        </div>
        <div class="title">直播</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-zhuanji"></div>
        </div>
        <div class="title">数字专辑</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-yueliang"></div>
        </div>
        <div class="title">助眠解压</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-xingxing"></div>
        </div>
        <div class="title">歌房</div>
      </div>
      <div class="item flex-col-spaceAround">
        <div class="iconfontRound flex-row-center">
          <div class="iconfont icon-airudiantubiaohuizhi-zhuanqu_youxi"></div>
        </div>
        <div class="title">游戏专区</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    let date = new Date()
    let todayDate = date.getDate()

    return {
      todayDate,
    }
  },
})
</script>

<style lang="less" scoped>
.select {
  width: 7.5rem;
  height: 1.6rem;
  overflow: scroll;
  margin: 0.15rem 0;
  border-bottom: 1px solid #ccc;
  .container {
    width: 12.5rem;
    margin-left: 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      width: 1.2rem;
      height: 1.2rem;
      .rili {
        position: relative;
        .todayDate {
          color: red;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -35%);
          font-size: 0.2rem;
        }
      }
      .iconfontRound {
        width: 70%;
        height: 70%;
        background: #fff1f1;
        border-radius: 50%;
        .iconfont {
          color: red;
          font-size: 0.5rem;
        }
      }
      .title {
        font-size: 0.2rem;
      }
    }
  }
  .container::after {
    content: "";
    width: 0.2rem;
    height: 100%;
  }
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
