<template>
    <div class="products">
        <h1>This is Products</h1>
        <loading :active.sync="isLoading"></loading>
        <Bread/>
         <div  class="itemlist">
            <div v-for="item in products" :key="item.id" class="item">
                <div class="itemimg">
                    <img :src="`${item.imageUrl[0]}`" alt="">
                </div>
                <span class="tag">{{item.category}}</span>
                <h5 class="item-tilte"><router-link :to="`/product/${item.id}`">{{item.title}}</router-link></h5>
                <!-- <p class="item-content">{{item.content}}</p> -->
                <div class="price">
                    <p>
                        <span class="origin_price">NT${{item.origin_price}}</span>
                        <span>NT${{item.price}}</span>
                    </p>
                </div>
                <div class="btn_container">
                    <loading :active.sync="isLoading"></loading>
                    <button type="button" class="btn" @click="addToCart(item)">Add To Cart</button>
                    <button type="button" class="btn">
                        <router-link :to="`/product/${item.id}`">Quick View</router-link>
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bread from '@/components/Bread.vue'
export default {
  components: {
    Bread
  },
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  methods: {
    addToCart (item, quantity = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity
      }
      this.axios.post(url, cart)
        .then(res => {
          this.isLoading = false
          console.log('item', res)
        })
    }
  },
  created () {
    this.isLoading = true
    // console.log(process.env.VUE_APP_ApiPath, process.env.VUE_APP_UUID)
    this.axios.get(`${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then(res => {
        this.products = res.data.data
        this.isLoading = false
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
.products{
    /* border: 1px solid blue; */
    position: relative;
}
.itemlist{
    /* border: 1px solid red; */
    width: 1056px;
    position: absolute;
    left: 50%;
    margin-left: -528px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;/*換行*/
    justify-content: flex-start;
    align-items: center;
}
.item{
    /* border: 1px solid blue; */
    width: 330px;
    margin: 10px;
}
.itemimg{
    width: 300px;
    height: 200px;
    overflow: hidden;
    /* margin: 10px; */
}
.itemimg img{
    width: 100%;
    margin: 0 15px;
}
.tag{
    /* border: 1px solid green; */
    position: relative;
    top: -190px;
    /* top: -205px; */
    width: 100px;
    height: 100px;
    padding: 10px;
    background: #9D6B53;
    border-radius: 5px;
    color: #fff;
    font-size: 6px;
    font-family: 'Bree Serif', serif;
    /* text-align: center; */
  }
.item-tilte,.price{
    text-align: center;
    margin: 10px;
}
.item-tilte a{
    text-decoration: none;
    color: #6d6875;
    font-family: 'Lemonada', cursive;
    font-size: 22px;
}
.origin_price{
    /* left: -10px; */
    padding: 0 10px;
    font-size: 12px;
    text-decoration: line-through;
    font-family: 'Lemonada', cursive;
}
.btn_container{
    /* border: 1px solid green; */
    height: 40px;
    margin: 10px auto;
    text-align: center;
}
.btn{
    width: 120px;
    height: 100%;
    background-color: #fff;
    border: 2px solid #B5838D;
    border-radius: 5px;
    margin: 0 15px;
    padding: 0 15px;
    color: #6d6875;
    font-family: 'Lemonada', cursive;
    font-size: 12px;
}
.btn a{
    text-decoration: none;
    color: #6d6875;
}
.btn:hover{
    cursor: pointer;
}
</style>
