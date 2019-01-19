<template>
  <div id="app">
    <gq-header/>
    <gq-tab/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Tab from '@/components/common/Tab'
export default {
  name: 'App',
  components: {
    'gq-header': Header,
    'gq-tab': Tab
  }
}
</script>

<style>
</style>
