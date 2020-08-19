<template>
  <div class="home">
    <!-- <h1>這是首頁</h1> -->
    <nav class="nav">
      <router-link to="/admin/home" class="nav-brand-title">MakeUp Beauty Back</router-link>
      <router-link to="/admin/products_dash" class="sort">Prodcuts</router-link>
      <router-link to="/admin/coupons" class="sort">Coupons</router-link>
      <router-link to="/admin/order" class="sort">Order</router-link>
      <router-link to="/admin/image" class="sort">Image</router-link>
      <router-link to="/" id="setting">回到前台</router-link>
      <router-link to="/" id="signout" class="sort" @click.native="signout"> SignOut</router-link>
    </nav>
  </div>
</template>

<style>
.nav{
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  border-bottom: 2px double #6d6875;
}
.nav-brand-title{
  position: relative;
  left: -80px;
  font-size: 28px;
  color: #6d6875;
  text-decoration: none;
  font-family: 'Satisfy', cursive;
}
.sort{
    text-decoration: none;
    position: relative;
    display: inline-block;
    left: 0px;
    margin: 0 15px;
    padding: 10px 0;
    color: #6d6875;
    font-size: 16px;
    font-family: 'Lemonada', cursive;
    border-bottom: 1px solid #6d6875;
}
#setting,#signout{
  position: relative;
  left: 100px;
  margin-top: -2px;
  margin-right:25px;
  color: #6d6875;
  font-size: 20px;
}
</style>
<script>
export default {
  methods: {
    signout () {
      document.cookie = 'MikoToken=;expires=;'
    }
  }
}
</script>
