/* 封裝Navbar元件 */
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
          <router-link class="nav-link" to="/">首頁</router-link>
          <router-link class="nav-link" to="/products">產品列表</router-link>
          <router-link class="nav-link" to="/cart">前台購物車</router-link>
          <router-link class="nav-link" to="/admin/AdminProducts"
            >後台管理</router-link
          >
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-info" style="width: 100px">
      結帳
      <span class="badge bg-danger"> {{ cartData.carts.length }} </span>
    </button>
  </nav>
</template>
<script>
import emitter from "@/libs/emitter";

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
  },
  mounted() {
    /*  this.getProducts(); */
    this.getCart();
    emitter.on("get-cart", () => {
      this.getCart();
    });
  },
};
</script>
