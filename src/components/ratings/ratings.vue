<template>
  <main class="ratings">
    <div class="ratings-comtent">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{ seller.rankRate }}%</div>
        </div>
        <div class="overview-right">服务添堵</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ratings',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ratings
    position absolute
    top 174px
    bottom 0
    width 100%
    overflow hidden
    .overview
      display flex
      padding 18px 0
      .overview-left
        flex 0 0 137px
        padding: 6px 0
        border-right 1px solid rgba(7, 17, 27, 0.1)
        text-align center
        .score
          margin-bottom 6px
          lien-height 28x
          font-size 24px
          color rgb(255, 153, 0)
        .title
          margin-bottom 8px
          line-height 12px
          font-size 12px
          color rgb(7, 17, 27)
        .rank
          line-height 10px
          font-size 10px
          color: rgb(147, 153, 159)

      .overview-right
        flex 1
        padding-left 24px
</style>
