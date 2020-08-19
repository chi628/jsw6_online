<template>
    <div>
      <loading :active.sync="isLoading"></loading>
      <h1>這是後台產品列表</h1>
      <div class="container">
        <button class="addbtn" type="button" @click="openModal('new')"> + </button>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Lanched</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>
                <span v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <button type="button" class="editbtn" @click="openModal('edit', item)">Edit</button>
                <button type="button" class="delbtn" @click="openModal('delete', item)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<style>
    .container {
      width: 980px;
      margin: 20px auto;
      border: 1px solid red;
    }

    .addbtn {
      width: 100px;
      height: 30px;
      float: right;
      border: 1px solid #915957;
      border-radius: 10px;
      background-color: #915957;
      color: #fff;
      font-size: 14px;
      /* margin: 0 0 15px 0; */
    }

    .container table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 10px;
      text-align: center;
      font-family: 'Sriracha', cursive;
      color:#333;
    }
    table thead th{
      padding:5px 0px;
      color:#fff;
      text-align:center;
      border:1px solid #915957;
      background-color:#915957;
      border-radius: 8px;
    }
    table tbody td{
      padding:5px 0px;
      color:#222;
      border-bottom:1px solid #003049;
    }
    .editbtn{
      width: 80px;
      height: 40px;
      padding:5px 0px;
      letter-spacing: 1px;
      color:#fff;
      text-align:center;
      background-color:#915957;
      border:1px solid #915957;
      border-radius: 15px;
    }
    .delbtn{
      width: 80px;
      height: 40px;
      padding:5px 0px;
      letter-spacing: 1px;
      color:#fff;
      text-align:center;
      background-color:#915957;
      border:1px solid #915957;
      border-radius: 15px;
    }
</style>
<script>
export default {
  data () {
    return {
      products: [],
      token: '',
      isLoading: false
    }
  },
  props: [' token'],
  created () {
    this.isLoading = true
    this.axios.get(`${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/products`)
      .then(res => {
        this.isLoading = false
        this.products = res.data.data
      })
  }
}
</script>
