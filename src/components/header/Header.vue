<template>
  <header class="header">
    <div class="content-wrapper">
      <figure class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </figure>
      <div class="content">
        <h1 class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </h1>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <spna class="icon" :class="classMap[seller.supports[0].type]"></spna>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: Object
  },
  data () {
    return {

    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin'

  .header
    color: #fff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        vertical-align: top
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 12px
            line-height: 10px
</style>
