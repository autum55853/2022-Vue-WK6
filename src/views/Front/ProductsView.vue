<template>
  <h2 class="mb-3 text-center">This is 產品列表頁面</h2>
  <table class="table align-middle">
    <thead>
      <th class="text-center">圖片</th>
      <th class="text-center">商品名稱</th>
      <th class="text-center">價格</th>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id + 1">
        <td style="width: 250px">
          <div
            style="
              height: 150px;
              backgroud-size: cover;
              background-position: center center;
            "
            :style="{ backgroundImage: `url('${product.imageUrl}')` }"
          ></div>
        </td>
        <td class="text-center">{{ product.title }}</td>
        <td class="text-center">{{ product.price }}</td>
        <td>
          <div>
            <router-link
              :to="`/product/${product.id}`"
              class="btn btn-outline-secondary m-2"
              >查看更多</router-link
            >
            <button
              class="btn btn-outline-danger"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <router-view></router-view>
</template>
<script>
import emitter from "@/libs/emitter";

export default {
  data() {
    return {
      products: [],
      cartData: {},
      isLoadingItem: "",
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
          //console.log(res.data.products);
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      //要記得在api 後面帶入 data (api規定的)
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          console.log(res);
          alert("商品已成功加入購物車");
          this.getCart();
          this.isLoadingItem = "";
          emitter.emit("get-cart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
