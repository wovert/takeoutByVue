<template>
  <div class="cart-control">
    <transition name="move"><i class="cart-decrease icon-remove_circle_outline" @click="decreaseCart" v-show="food.count > 0"></i></transition><span class="cart-count" v-show="food.count > 0">{{ food.count }}</span><i class="cart-add icon-add_circle" @click="addCart"></i>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'cart-control',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) {
        return
      }
      !this.food.count ? Vue.set(this.food, 'count', 1) : ++this.food.count
    },
    decreaseCart () {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  },
  computed: {
  },
  created () {
    // console.log(this.food)
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart-control-wrapper
    font-size: 0
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      transition: all 0.4s linear
      &.move-transition
        transform: translate3D(0, 0, 0)
        transform: rotate(0)
        opacity: 1
      &.move-enter, &.move-leave-to
        transform: translate3D(24px, 0, 0)
        transform: rotate(180deg)
        opacity: 0
</style>
