<template>
  <div class="home">
    <Swiper />
    <Select />
    <RecommendedPlaylist />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Swiper from "../components/Home/Swiper.vue"
import Select from "../components/Home/Select.vue"
import RecommendedPlaylist from "../components/Home/RecommendedPlaylist.vue"

export default defineComponent({
  components: {
    Swiper,
    Select,
    RecommendedPlaylist,
  },
  setup() {},
})
</script>

<style lang="less" scoped>
.home {
  width: 7.5rem;
  margin-top: 1.2rem;
  height: calc(100vh - 3.7rem);
  overflow: scroll;
}
</style>
