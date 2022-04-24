<template>
  <h2 class="mb-3 text-center">This is {{ product.title }} 的頁面</h2>
</template>
<script>
import emitter from "@/libs/emitter";
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      //console.log(this.$route);
      //取得網址上的產品id
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
          //console.log(res.data.product);
          //get-cart 觸發Narbar上的監聽行為
          emitter.emit("get-cart");
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
