<template>
  <div>
   <nav class="nav">
      <router-link to="/" class="nav-title">MakeUp Beauty</router-link>
      <div class="sort">
          <div class="navtag">
            <router-link to="/about" class="sort_tag">Story</router-link>
            <router-link to="/products" class="sort_tag">SkinCare</router-link>
            <router-link to="/products" class="sort_tag">MakeUp</router-link>
            <router-link to="/products" class="sort_tag">Specail Offer</router-link>
          </div>
        <div class="icon">
            <div class="search_container">
                <input type="search" id="search" placeholder="Search..." />
                <span id="searchbtn"><font-awesome-icon :icon="['fas', 'search']" /></span>
            </div>
            <router-link to="/account" id="user"><font-awesome-icon :icon="['far', 'user']" /></router-link>
            <router-link to="/cart" id="shopping_cart"><font-awesome-icon :icon="['fas', 'shopping-cart']" /></router-link>
            <router-link to="/login" id="setting">後台管理</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav{
  width: 100vw;
  height: 120px;
  margin-top: 25px;
  margin-bottom: 5px;
//   border:1px solid blue;
}
.nav-title{
    display: block;
    font-family: 'Satisfy', cursive;
    font-size: 36px;
    color: #6d6875;
    text-decoration: none;
    text-align: center;
}
.sort{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 25px auto 0px auto;
}
.navtag{
    // border:1px solid blue;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
}
.sort_tag{
    text-decoration: none;
    margin: 0 15px;
    color: #6d6875;
    font-size: 16px;
    font-family: 'Lemonada', cursive;
}
.icon{
    // border:1px solid red;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.search_container{
    width: 250px;
    position: relative;
    margin-right:15px;
    // left: -10px;
}
.search_container input#search{
    width: 50px;
    height: 50px;
    border: none;
    font-size: 10px;
    float: right;
    padding-left: 35px;
    border-radius: 15px;
    // transition: width .3s ease;
}
.search_container input#search::placeholder {
   color: #fff;
}
.search_container #searchbtn{
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 1;
  color: #6d6875;
  font-size: 20px;
}
.search_container input#search:focus, .search_container input#search:active{
    outline:none;
    width: 250px;
    border: 1px solid #CB997E;
}
.search_container:hover input#search{
  width: 250px;
  border: 1px solid #CB997E;
}
.search_container:hover #searchbtn{
    left: 10px;
}
.search_container:hover input#search::placeholder {
   color: #6d6875;
}
#user,#shopping_cart,#setting{
  position: relative;
  left: 0;
  margin-right:25px;
  color: #6d6875;
  font-size: 20px;
}
// .nav-title:hover,.sort_tag:hover{
//   border-bottom: 1px solid red;
// }
</style>
