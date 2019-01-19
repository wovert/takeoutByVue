<template>
    <section class="tab border-1px">
      <div class="tab-item" v-for="(item, index) in menu" :key="index">
        <router-link :to="{name: item.to}">
          {{ item.title }}
        </router-link>
      </div>
    </section>
</template>

<script>
import '@/common/stylus/index'
export default {
  name: 'tab',
  data () {
    return {
      menu: [
        {
          to: 'goods',
          title: '商品'
        },
        {
          to: 'ratings',
          title: '评论'
        },
        {
          to: 'seller',
          title: '商家'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .tab
    display: flex
    width: 100%
    height: 2.857143rem
    line-height: 2.857143rem
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 1rem
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
