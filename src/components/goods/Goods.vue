<template>
  <main class="goods">
    <section class="menu-wrapper">
      <ul>
        <li v-for="(item, i) in goods" :key="i" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </section>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item, i) in goods" :key="i" class="food-list">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="(food, k) in item.foods" :key="k" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>            
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }} 份</span>
                  <span>好评率{{ food.rating }} %</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                  <span class="old" v-show="food.oldPrice">${{ food.oldPrice }}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
const STATUS_OK = 200
const HOST = 'http://192.168.1.88:3004/api/'
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get(`${HOST}goods`).then(res => {
      console.log(res)
      if (res.status === STATUS_OK) {
        this.goods = res.data
      }
    })
  },
  data () {
    return {
      goods: [],
      classMap: []
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin'
  .goods
    display: flex
    position: absolute
    top: 174px // header距离
    bottom: 46px // cart距离
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px //grow 0: 如果存在剩余空间，也不放大, shrink: 即如果空间不足，该项目将缩小,默认1,0：不缩小 basis:  默认auto,即项目的本来大小，占据的主轴空间 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px

    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            margin-bottom: 8px
          .extra
            &.count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color:rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)

          

</style>
