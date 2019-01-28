<template>
  <div class="cart-control">
    <transition><div class="cart-decrease" @click.stop.prevent="decreaseCart" v-show="food.count > 0">
        <i class="inner icon-remove_circle_outline"></i>
      </div></transition><span class="cart-count" v-show="food.count > 0">{{ food.count }}</span><i class="cart-add icon-add_circle" @click.stop.prevent="addCart"></i>
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
      this.$emit('event', event.target)
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
    .cart-decrease
      display: inline-block
      padding: 6px
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
      &.v-enter-active, &.v-leave-active
        transition: all 0.4s linear
      &.v-enter, &.v-leave-active   // 刚进入和离开后的状态
        opacity: 0
        transform: translateX(24px)
        .inner1
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
