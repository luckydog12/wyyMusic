<template>
  <div class="head">
    <HomeHead v-if="nowRoutePath === '/home'" />
    <BokeHead v-else-if="nowRoutePath === '/boke'" />
    <MyHead v-else-if="nowRoutePath === '/my'" />
    <FollowHead v-else-if="nowRoutePath === '/follow'" />
    <YuncunHead v-else-if="nowRoutePath === '/yuncun'" />
  </div>
  <div class="footer">
    <div class="top1">top</div>
    <div class="bottomNavigation flex-row-spaceBetween">
      <div class="navigationItem flex-col-spaceAround" :class="nowRoutePath === '/home' ? 'navigationActive' : ''" @click="router.push('/home')">
        <div class="iconContainer">
          <div class="iconfont icon-faxian"></div>
        </div>
        <div class="navigationTitle">发现</div>
      </div>

      <div class="navigationItem flex-col-spaceAround" :class="nowRoutePath === '/boke' ? 'navigationActive' : ''" @click="router.push('/boke')">
        <div class="iconContainer">
          <div class="iconfont icon-shengyin"></div>
        </div>
        <div class="navigationTitle">播客</div>
      </div>

      <div class="navigationItem flex-col-spaceAround" :class="nowRoutePath === '/my' ? 'navigationActive' : ''" @click="router.push('/my')">
        <div class="iconContainer">
          <div class="iconfont icon-yinfu"></div>
        </div>
        <div class="navigationTitle">我的</div>
      </div>

      <div class="navigationItem flex-col-spaceAround" :class="nowRoutePath === '/follow' ? 'navigationActive' : ''" @click="router.push('/follow')">
        <div class="iconContainer">
          <div class="iconfont icon-guanzhu"></div>
        </div>
        <div class="navigationTitle">关注</div>
      </div>

      <div class="navigationItem flex-col-spaceAround" :class="nowRoutePath === '/yuncun' ? 'navigationActive' : ''" @click="router.push('/yuncun')">
        <div class="iconContainer">
          <div class="iconfont icon-M"></div>
        </div>
        <div class="navigationTitle">云村</div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, reactive, toRefs } from "vue"
import { useRoute, useRouter } from "vue-router"
import HomeHead from "../components/HomeHead.vue"
import BokeHead from "../components/BokeHead.vue"
import MyHead from "../components/MyHead.vue"
import FollowHead from "../components/FollowHead.vue"
import YuncunHead from "../components/YuncunHead.vue"

export default defineComponent({
  components: {
    HomeHead,
    BokeHead,
    MyHead,
    FollowHead,
    YuncunHead,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      nowRoutePath: "",
    })
    onMounted(() => {
      state.nowRoutePath = route.path
    })
    onUpdated(() => {
      state.nowRoutePath = route.path
    })
    return {
      ...toRefs(state),
      router,
    }
  },
})
</script>

<style lang="less" scoped>
.head {
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.footer {
  width: 7.5rem;
  height: 2.5rem;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  .top1 {
    height: 50%;
    background-color: #fdfdfd;
  }
  .bottomNavigation {
    height: 50%;
    padding: 0 0.3rem;
    background-color: #fff;
    color: #696969;
    .navigationActive {
      .iconContainer {
        width: 0.6rem;
        height: 0.6rem;
        background: red;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }
      .iconfont {
        font-size: 0.4rem !important;
        color: #fff;
      }
      .navigationTitle {
        color: red;
      }
    }
    .navigationItem {
      height: 90%;
      .iconfont {
        font-size: 0.5rem;
      }
      .navigationTitle {
        font-size: 0.2rem;
      }
    }
  }
}
</style>
