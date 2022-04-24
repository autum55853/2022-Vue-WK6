<template>
  <h2>This is 購物車頁面</h2>
  <div>
    <button type="button" class="btn btn-danger" @click="removeAllCartItem()">
      清空購物車
    </button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量</th>
        <th class="text-end">單價</th>
        <th class="text-end">各品項總價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            <button
              @click="removeCartItem(item.id)"
              type="button"
              class="btn btn-outline-danger btn-sm"
            >
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">
                      已套用優惠券
                    </div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- 不給使用者填寫 <input min="1" type="number" class="form-control" v-model="item.qty"> -->
                <!-- 設置disabled 避免選到原來的數字,重複觸發api -->
                <select
                  class="form-select"
                  v-model="item.qty"
                  @change="updateCart(item)"
                  :disabled="isLoadingItem === item.id"
                  id=""
                >
                  <!-- v-for="num in 20" 顯示出1~20的數字 -->
                  <option
                    :value="num"
                    v-for="num in 20"
                    :key="`${num}-${item.id}`"
                    :selected="item.qty === num"
                  >
                    {{ num }}
                  </option>
                </select>
              </div>
            </div>
          </td>
          <td class="text-end">
            ${{ item.product.price }} / {{ item.product.unit }}
          </td>
          <td class="text-end">${{ item.final_total }}</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計 Total Amount</td>
        <td class="text-end">$ {{ cartData.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import emitter from "@/libs/emitter";
export default {
  data() {
    return {
      cartData: {},
      products: [],
      isLoadingItem: "",
    };
  },
  methods: {
    /* getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
          console.log(res.data.products);
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    }, */
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
    removeCartItem(id) {
      this.isLoadingItem = id;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then(() => {
          //console.log(res);
          alert("商品已從購物車刪除");
          this.getCart();
          emitter.emit("get-cart");
          this.isLoadingItem = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeAllCartItem() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
        )
        .then(() => {
          //console.log(res);
          alert("已清空購物車");
          this.getCart();
        });
    },
    updateCart(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.isLoadingItem = item.id;
      //要記得在api 後面帶入 data (api規定的)
      this.$http
        .put(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then((res) => {
          console.log(res);
          emitter.emit("get-cart");
          //alert('商品數量已更新');
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    /*  this.getProducts(); */
    this.getCart();
  },
};
</script>
