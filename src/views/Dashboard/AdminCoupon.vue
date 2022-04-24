<template>
  <h2 class="text-center m-3">優惠券管理</h2>
  <button type="button" class="btn btn-primary align-right m-2">
    建立新的優惠券
  </button>
  <table class="table align-middle mx-3">
    <thead>
      <th class="text-center">名稱</th>
      <th class="text-center">折扣百分比</th>
      <th class="text-center">到期日</th>
      <th class="text-center">是否啟用</th>
      <th class="text-center">編輯</th>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id + 1">
        <td style="width: 250px">
          {{ coupon }}
        </td>
        <td class="text-center">{{}}</td>
        <td class="text-center">{{}}</td>
        <td class="text-center">{{}}</td>
        <td>{{}}</td>
        <td>
          <button class="btn btn-outline-danger">編輯</button>
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
      coupons: [],
      pagination: {},
    };
  },
  methods: {
    getCoupons() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
        )
        .then((res) => {
          console.log(res.data);
          //this.coupons = res.data.products;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
<style lang="scss">
.width {
  max-width: 80%;
  margin: 0 auto;
}
</style>
