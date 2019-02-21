<template>
  <div id="app">
    <gq-header :seller="seller" />
    <gq-tab />
    <keep-alive>
      <router-view :seller="seller" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :seller="seller" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/common/tab'
import {urlParse} from '@/common/js/utils'

const STATUS_OK = 200
const HOST = 'http://192.168.1.88:3004/api/'

export default {
  name: 'App',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  components: {
    'gq-header': Header,
    'gq-tab': Tab
  },
  created () {
    this.$http.get(`${HOST}seller?id=${this.seller.id}`).then(res => {
      if (res.status === STATUS_OK) {
        this.seller = Object.assign({}, this.seller, res.data)
      }
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
