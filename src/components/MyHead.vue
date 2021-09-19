<template>
  <div class="flex-row-spaceBetween main">
    <PublicHeadLeft />

    <div class="headRight">
      <div class="iconfont icon-sousuo"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PublicHeadLeft from "./PublicHeadLeft.vue"
export default defineComponent({
  components: {
    PublicHeadLeft,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  padding: 0 0.3rem;
  .headRight {
    .iconfont {
      font-size: 0.5rem;
    }
  }
}
</style>
