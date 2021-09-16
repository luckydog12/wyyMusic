<template>
  <div class="headCenter"></div>

  <div class="headRight">
    <div class="iconfont icon-sousuo"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.headCenter {
  width: 6rem;
}
.headRight {
  .iconfont {
    font-size: 0.5rem;
  }
}
</style>
