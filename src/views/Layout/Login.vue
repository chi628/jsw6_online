<template>
    <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
         <div class="login">
             <div class="login_img">
                 <img src="../../assets/login.jpg" alt="">
             </div>
            <form class="login-form" @keyup.enter="signin()">
                <h1>Login</h1>
                <div class="form-group">
                    <label for="inputEmail">Email Address</label>
                    <input id="inputEmail" type="email" placeholder="email" required autofocus v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input id="inputPassword" type="password" placeholder="password" required v-model="user.password">
                </div>
                <button type="submit" class="login-btn" @click.prevent="signin()">Sign In</button>
            </form>
        </div>
    </div>
</template>
<style>
        .login{
            width: 750px;
            margin: 50px auto;
            display: flex;
        }
        .login_img{
            width: 350px;
            display: flex;
            align-items:center;
            justify-content:center;
            padding: 5px 15px;
            border-right: 3px solid #CB997E;
        }
        .login_img img{
            width: 100%;
            border-radius: 15px;
        }
        .login-form{
            width: 350px;
            padding: 5px 15px;
        }
        .login-form h1{
            font-family: 'Lemonada', cursive;
            text-align: center;
            padding: 15px;
            font-size: 56px;
            color: #6d6875;
        }
        .form-group{
            margin: 15px 0;
        }
        .form-group label{
            font-family: 'Sriracha', cursive;
            color: #6d6875;
        }
        .form-group input{
            margin-top: 10px;
            width: 100%;
            height: 40px;
            border: 3px solid #CB997E;
            border-radius: 4px;
            color: #6d6875;
            font-size: 14px;
            font-family: 'Sriracha', cursive;
        }
        .login-btn{
            display: block;
            border: 3px solid #CB997E;
            width: 250px;
            height: 80px;
            margin: 40px auto;
            border-radius: 10px;
            background-color: #fff;
            color: #6d6875;
            font-size: 18px;
            font-family: 'Sriracha', cursive;
            cursor: pointer;
            transition: .1s linear;
        }
        .login-btn:hover{
            background-color: #CB997E;
        }
        .copy-mark{
            text-align: center;
            font-size: 14px;
            font-family: 'Acme', sans-serif;
            color: #666;
        }
</style>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false
    }
  },
  methods: {
    signin () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_ApiPath}/api/auth/login`
      this.axios.post(api, this.user).then((res) => {
        this.isLoading = false
        const token = res.data.token
        const expired = res.data.expired
        document.cookie = `MikoToken = ${token}; expires = ${new Date(expired * 1000)}; path=/`
        this.$router.push('/admin')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
