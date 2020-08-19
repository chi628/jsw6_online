<template>
    <div class="cart">
        <loading :active.sync="isLoading"></loading>
        <h1>This is Cart</h1>
        <div class="bag">
            <div class="bag_title">
                <h3>Shopping Bag</h3>
                <div class="bag_quantity">1 item</div>
                <hr>
            </div>
            <div v-for="item in cart" :key="item.id" class="bag_content">
                <div class="bag_img item_left">
                    <img :src="`${item.product.imageUrl[0]}`">
                </div>
                <div class="item_content item_right">
                    <h3>{{item.product.title}}</h3>
                    <h4>{{item.product.price}}</h4>
                    <button type="button" class="item_remove">刪除</button>
                    <button type="button" class="item_edit">編輯</button>
                    <div class="item_quantity">
                        <label for="">
                            <span>Quantity</span>
                            <select name="quantity0">
                                <option value="1" selected >1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div class="bag_side">
                <h2>Order Summary</h2>
                <hr>
                <div>My bag (4items) $10000</div>
                <div>
                    <input type="text" placeholder="Add your Promotion code">
                    <button type="button">確認</button>
                </div>
                <div><h2>Total:$10000</h2></div>
                <router-link to='/orderchecked'>確認無誤，結帳</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      cart: {},
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    this.axios.get(`${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`)
      .then(res => {
        this.isLoading = false
        this.cart = res.data.data
        console.log(this.cart)
      })
  }
}
</script>
<style>
h1{
    font-size: 72px;
    text-align: center;
    margin-top: 10px;
}
.cart{
    position:static;
    text-align: center;
}
.bag{
    /* border: 1px solid blue; */
    position: absolute;
    left: 50%;
    margin-left: -540px;
    width: 1080px;
}
.bag_title{
    width: 720px;
}
.bag_content{
    display: flex;
    border-bottom:1px solid #999;
    width: 720px;
    padding: 10px;
}
.item_left{
    width: 240px;
}
.item_left img{
    width: 100%;
}
.bag_side{
    width: 330px;
    /* border: 1px solid red; */
    position: absolute;
    top: 15px;
    right: 15px;
}
</style>
