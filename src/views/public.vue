<template>
  <div class="top">
    top
  </div>
  <div class="footer">
    <div class="top1">top</div>
    <div class="bottom">bottom</div>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {},
})
</script>

<style lang="less" scoped>
.top {
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
}
.footer {
  width: 7.5rem;
  height: 2.5rem;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0%;
  .top1 {
    height: 50%;
    background-color: #fdfdfd;
  }
  .bottom {
    height: 50%;
    background-color: #fff;
  }
}
</style>
