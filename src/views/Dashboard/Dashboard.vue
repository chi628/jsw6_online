<template>
    <div>
      <Dashboardnav/>
      <h1>這裡是後台首頁</h1>
      <router-view v-if="checkedSuccess" :token="token"/>
    </div>
</template>
<script>
import Dashboardnav from '@/components/Dashboardnav.vue'
export default {
  components: {
    Dashboardnav
  },
  data () {
    return {
      token: '',
      checkedSuccess: false
    }
  },
  methods: {
    checkedToken () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)MikoToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.axios.post(`${process.env.VUE_APP_ApiPath}/api/auth/check`, {
        api_token: this.token
      }).then(res => {
        console.log('Authtoken', res)
        this.checkedSuccess = true
      }).catch(err => {
        console.log(err)
        this.$router.push('/login')
      })
    }
  },
  created () {
    this.checkedToken()
  }
}
</script>
