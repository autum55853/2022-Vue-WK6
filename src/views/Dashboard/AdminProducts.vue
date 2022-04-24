<template>
  <h2 class="text-center m-3">產品列表</h2>
  <button type="button" class="btn btn-primary align-right m-2">
    建立新產品
  </button>
  <table class="table align-middle mx-3">
    <thead>
      <th class="text-center">分類</th>
      <th class="text-center">產品名稱</th>
      <th class="text-center">原價</th>
      <th class="text-center">售價</th>
      <th class="text-center">是否啟用</th>
      <th class="text-center">編輯</th>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id + 1">
        <td style="width: 250px">
          {{ product.category }}
        </td>
        <td class="text-center">{{ product.title }}</td>
        <td class="text-center">{{ product.origin_price }}</td>
        <td class="text-center">{{ product.price }}</td>
        <td>{{ product.is_enabled }}</td>
        <td>
          <button class="btn btn-outline-danger" @click="addToCart(product.id)">
            編輯
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
        )
        .then((res) => {
          //console.log(res.data);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
.width {
  max-width: 80%;
  margin: 0 auto;
}
</style>
