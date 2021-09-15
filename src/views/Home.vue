<template>
  <div class="home">
    home
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  components: {},
  setup() {
    const route = useRoute()
    console.log(route)
  },
})
</script>

<style lang="less" scoped>
.home {
  width: 7.5rem;
  height: 20rem;
  background: #bfa;
}
</style>
