<template>
  <BackNavbar></BackNavbar>

  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
//匯入 被封裝的元件
import BackNavbar from "@/components/BackNavbar.vue";

export default {
  components: {
    BackNavbar,
  },
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      //取出token
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        //取出token後,帶入axios headers
        this.$http.defaults.headers.common["Authorization"] = token;
        //驗設登入狀態
        const url = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http
          .post(url, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.message);
            this.$router.push("/login");
          });
      } else {
        console.log(token);
        alert("你尚未登入");
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
</style>
