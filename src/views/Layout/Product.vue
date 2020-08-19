<template>
    <div class="product">
        <loading :active.sync="isLoading"></loading>
        <h1>This is Product Detail</h1>
        <Bread/>
        <div class="product_detail">
          <div class="product_img">
            <img :src="`${product.imageUrl}`" alt="">
          </div>
          <div class="product_content">
            <h1>{{product.title}}</h1>
            <p>{{product.content}}</p>
            <p>{{product.price}}</p>
            <button type="button">Add To Bag</button>
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
      product: {},
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    this.axios.get(`${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`)
      .then(res => {
        this.isLoading = false
        this.product = res.data.data
        console.log('detail', this.product)
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
.product{
    position: relative;
}
.product_detail{
  width: 1080px;
  /* border: 1px solid red; */
  position: absolute;
  display: flex;
  left: 50%;
  margin-top: 20px;
  margin-left: -540px;
}
.product_img{
  width: 540px;
}
.product_img img{
  width: 100%;
}
.product_content{
  /* border: 1px solid blue; */
  width: 540px;
}
</style>
