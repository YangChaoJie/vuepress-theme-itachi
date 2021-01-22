<template>
  <div class="home-box">
    <div :class="[position === 'left' ? 'img-box' : 'img-box-1']">
      <img :src="item.img" alt="">
    </div>
    <div :class="[position === 'left' ? 'title-content' : 'title-content-1']">
      <div class="text-main">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'left'
    },
    item: {
      type: Object
    }
  },
  setup(props) {
    const text = 'Everything we make is the result of our ceaseless passion for engineering and design. Whether smart speakers or noise cancelling headphones, we innovate and push wireless potential to its limits, in order to create rich, pure sound. Sound that we bring to life with timeless, Danish design. Creating the perfect harmony of form and function.'
    const imgPath = 'https://prodlibratonesitestorage.blob.core.windows.net/cache/2/f/d/2/e/c/2fd2ec62e988ffb5088017fd186726d950811bba.jpg'
    const aa = 'left'
    return {
      text,
      imgPath
    }
  },
}
</script>

<style lang="stylus" scoped>
.home-box {
  width: 70%;
  flex-grow: 1;
  display: flex;
  margin: 70px auto 120px;
  .img-box, .img-box-1 {
    order: 2;
    margin-left : -50px;
    background-color: #a2c7e2
    z-index 10
    width: 50%;
    height 270px
    margin-top 60px
    position: relative;
    img {
      width: 100%;
      min-height: 154px;
      max-height 100%
    }
  }
  .img-box-1 {
    order: 1;
    margin-right: -50px;
    margin-left: 0;
  } 
  .title-content,  .title-content-1 {
    order: 1;
    display flex;
    width 55%;
    background-color #efefef;
    padding 70px 0;
    text-align center
    min-height 400px
    text-align center
    justify-content center
    .text-main {
      width 70%
    }
  }
  .title-content-1 {
    order: 2;
    }
}
.home-box:hover {
  .title-content,  .title-content-1 {
    background #17a2b8;
    color white
  }
}
</style>
