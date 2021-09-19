<template>
  <div class="home">
    <Swiper />
    <Select />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Swiper from "../components/Home/Swiper.vue"
import Select from "../components/Home/Select.vue"

export default defineComponent({
  components: {
    Swiper,
    Select,
  },
  setup() {},
})
</script>

<style lang="less" scoped>
.home {
  width: 7.5rem;
}
</style>
