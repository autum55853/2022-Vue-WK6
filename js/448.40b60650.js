"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[448],{530:function(t,e,a){function n(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map((function(t){t(a)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,a)}))}}}a.d(e,{Z:function(){return i}});const l=n();var i=l},674:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(252),l=a(577),i=a(963);const o=(0,n._)("h2",null,"This is 購物車頁面",-1),s={class:"table align-middle"},c=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th",null,"品名"),(0,n._)("th",{style:{width:"150px"}},"數量"),(0,n._)("th",{class:"text-end"},"單價"),(0,n._)("th",{class:"text-end"},"各品項總價")])],-1),r=["onClick"],u={class:"input-group input-group-sm"},d={class:"input-group mb-3"},h=["onUpdate:modelValue","onChange","disabled"],p=["value","selected"],g={class:"text-end"},m={class:"text-end"},_=(0,n._)("td",{colspan:"3",class:"text-end"},"總計 Total Amount",-1),v={class:"text-end"};function b(t,e,a,b,f,C){return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("div",null,[(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=t=>C.removeAllCartItem())}," 清空購物車 ")]),(0,n._)("table",s,[c,(0,n._)("tbody",null,[f.cartData.carts?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(f.cartData.carts,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,[(0,n._)("button",{onClick:e=>C.removeCartItem(t.id),type:"button",class:"btn btn-outline-danger btn-sm"}," x ",8,r)]),(0,n._)("td",null,(0,l.zw)(t.product.title),1),(0,n._)("td",null,[(0,n._)("div",u,[(0,n._)("div",d,[(0,n.wy)((0,n._)("select",{class:"form-select","onUpdate:modelValue":e=>t.qty=e,onChange:e=>C.updateCart(t),disabled:f.isLoadingItem===t.id,id:""},[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(20,(e=>(0,n._)("option",{value:e,key:`${e}-${t.id}`,selected:t.qty===e},(0,l.zw)(e),9,p))),64))],40,h),[[i.bM,t.qty]])])])]),(0,n._)("td",g," $"+(0,l.zw)(t.product.price)+" / "+(0,l.zw)(t.product.unit),1),(0,n._)("td",m,"$"+(0,l.zw)(t.final_total),1)])))),128)):(0,n.kq)("",!0)]),(0,n._)("tfoot",null,[(0,n._)("tr",null,[_,(0,n._)("td",v,"$ "+(0,l.zw)(f.cartData.final_total),1)])])])],64)}var f=a(530),C={data(){return{cartData:{},products:[],isLoadingItem:""}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/amberlin/cart").then((t=>{this.cartData=t.data.data}))},removeCartItem(t){this.isLoadingItem=t,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/amberlin/cart/${t}`).then((()=>{alert("商品已從購物車刪除"),this.getCart(),f.Z.emit("get-cart"),this.isLoadingItem=""})).catch((t=>{console.log(t)}))},removeAllCartItem(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/amberlin/carts").then((()=>{alert("已清空購物車"),this.getCart()}))},updateCart(t){const e={product_id:t.id,qty:t.qty};this.isLoadingItem=t.id,this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/amberlin/cart/${t.id}`,{data:e}).then((t=>{console.log(t),f.Z.emit("get-cart"),this.getCart()})).catch((t=>{console.log(t)}))}},mounted(){this.getCart()}},w=a(744);const k=(0,w.Z)(C,[["render",b]]);var x=k}}]);
//# sourceMappingURL=448.40b60650.js.map