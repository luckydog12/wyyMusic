<template>
  <div class="flex-row-spaceBetween main" :style="{ background: backgroundColor }" style="transition: all 1s;">
    <PublicHeadLeft />

    <div class="headCenter flex-row-center">
      <div class="iconfont icon-sousuo"></div>
    </div>

    <div class="headRight">
      <div class="iconfont icon-huatong"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from "vue"
import { useStore } from "vuex"
import PublicHeadLeft from "./PublicHeadLeft.vue"

export default defineComponent({
  components: {
    PublicHeadLeft,
  },
  setup() {
    const store = useStore()
    const state = reactive({
      backgroundColor: "",
    })
    onMounted(() => {
      watch(
        () => store.state.homeBackgroundColor,
        (newVal, oldVal) => {
          state.backgroundColor = newVal
        },
        {
          immediate: true, // 立即执行
          deep: true, //深度监视
        }
      )
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  padding: 0 0.3rem;
  .headCenter {
    background-color: #fff;
    width: 5.5rem;
    height: 60%;
    border-radius: 0.3rem;
    .iconfont {
      color: #ccc;
    }
  }
  .headRight {
    .iconfont {
      font-size: 0.5rem;
    }
  }
}
</style>
