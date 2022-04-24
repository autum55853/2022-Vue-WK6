<template>
  <h2 class="text-center">登入頁面</h2>
  <form class="width">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="user.username"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="user.password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="signIn()">
      登入
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      console.log(this.user);
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          console.log(token, expired);
          document.cookie = `myToken=${token};expires=${new Date(expired)};`;
          this.$router.push("/admin/AdminProducts");
        })
        .catch(() => {
          alert("帳號或密碼錯誤,請重新確認");
          this.user.username = "";
          this.user.password = "";
        });
    },
  },
};
</script>
<style lang="scss">
.width {
  max-width: 50%;
  margin: 0 auto;
}
</style>
