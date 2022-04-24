//目的: 當購物車品項增加時,結帳按鈕的數量也要更新=>跨元件傳遞
import mitt from "mitt";
const emitter = mitt();
export default emitter;
