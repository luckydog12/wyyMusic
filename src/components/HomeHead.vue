<template>
  <div class="headCenter">
    <form action="/">
      <van-search v-model="searchInput" :show-action="false" shape="round" input-align="left" placeholder="请输入搜索关键词" @search="onSearch" />
    </form>
  </div>

  <div class="headRight">
    <div class="iconfont icon-huatong"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const searchInput = ref<String | null>("")
    const onSearch = (val: String | null) => {
      console.log(val)
    }

    return {
      searchInput,
      onSearch,
    }
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
