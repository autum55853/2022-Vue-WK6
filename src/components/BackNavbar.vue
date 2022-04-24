/* 封裝Navbar元件 */
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-black">
    <div class="container-fluid">
      <a class="navbar-brand text-secondary" href="#">後台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link text-secondary" to="/"
            >返回前台頁面</router-link
          >
          <router-link class="nav-link text-secondary" to="/admin/AdminProducts"
            >產品管理</router-link
          >
          <router-link class="nav-link text-secondary" to="/admin/coupon"
            >優惠券管理</router-link
          >
          <router-link class="nav-link text-secondary" to="/admin/article"
            >貼文</router-link
          >
          <a href="#" class="nav-link text-secondary" @click.prevent="signOut()"
            >登出</a
          >
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    signOut() {
      document.cookie = "myToken=;expires=;";
      alert("token 已清除");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
.text-secondary:hover {
  font-weight: bold;
  color: white !important;
}
</style>
