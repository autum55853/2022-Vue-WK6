"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[23],{23:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var r=a(252),t=a(963);const n=(0,r._)("h2",{class:"text-center"},"登入頁面",-1),o={class:"width"},l={class:"mb-3"},u=(0,r._)("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),i={class:"mb-3"},c=(0,r._)("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1);function d(e,s,a,d,p,m){return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,(0,r._)("form",o,[(0,r._)("div",l,[u,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":s[0]||(s[0]=e=>p.user.username=e)},null,512),[[t.nr,p.user.username]])]),(0,r._)("div",i,[c,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":s[1]||(s[1]=e=>p.user.password=e)},null,512),[[t.nr,p.user.password]])]),(0,r._)("button",{type:"submit",class:"btn btn-primary",onClick:s[2]||(s[2]=e=>m.signIn())}," 登入 ")])],64)}var p={data(){return{user:{username:"",password:""}}},methods:{signIn(){console.log(this.user);const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:s,expired:a}=e.data;console.log(s,a),document.cookie=`myToken=${s};expires=${new Date(a)};`,this.$router.push("/admin/AdminProducts")})).catch((()=>{alert("帳號或密碼錯誤,請重新確認"),this.user.username="",this.user.password=""}))}}},m=a(744);const h=(0,m.Z)(p,[["render",d]]);var w=h}}]);
//# sourceMappingURL=23.e8b553d6.js.map