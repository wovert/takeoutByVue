<template>
  <div id="app">
    <gq-header :seller="seller" />
    <gq-tab/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Tab from '@/components/common/Tab'

const STATUS_OK = 200
const HOST = 'http://192.168.1.88:3004/api/'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'gq-header': Header,
    'gq-tab': Tab
  },
  created () {
    this.$http.get(`${HOST}seller`).then(res => {
      console.log(res)
      if (res.status === STATUS_OK) {
        this.seller = res.data
      }
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
