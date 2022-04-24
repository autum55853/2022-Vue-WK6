<template>
  <h1 class="center p-3">你現在在前台頁面</h1>
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
  <!-- 以下顯示的是下一層router(ProductsView)的內容 -->
</template>

<script>
//匯入 被封裝的元件
import FrontNavbar from "@/components/FrontNavbar.vue";

export default {
  components: {
    FrontNavbar,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
</style>
