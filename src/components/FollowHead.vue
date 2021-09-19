<template>
  <div class="flex-row-spaceBetween main">
    <PublicHeadLeft />

    <div class="headCenter">
      关注
    </div>

    <div class="headRight"></div>
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
  .headCenter {
    width: 6rem;
  }
}
</style>
