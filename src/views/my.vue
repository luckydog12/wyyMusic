<template>
  <div class="my">
    my
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: {},
  setup() {},
})
</script>

<style lang="less" scoped>
.my {
  width: 7.5rem;
  margin-top: 1.2rem;
  height: calc(100vh - 3.7rem);
  overflow: scroll;
}
</style>
