<template>
  <div class="home">
    <Swiper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Swiper from "../components/Home/Swiper.vue"

export default defineComponent({
  components: {
    Swiper,
  },
  setup() {},
})
</script>

<style lang="less" scoped>
.home {
  width: 7.5rem;
}
</style>
