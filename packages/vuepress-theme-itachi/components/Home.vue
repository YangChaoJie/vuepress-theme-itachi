<template>
  <div class="home-wapper">
    <div class="banner">
      <img class="img" :src="homeData.bananer">
      <home-title></home-title>
    </div> 
    <div class="brief">
      <!-- PC端features块 s -->
      <div class="section-title">  技术 · 驱动 </div>
        <div
          class="features"
          v-if="homeData.features && homeData.features.length"
        >
          <div
            class="feature"
            v-for="(feature, index) in homeData.features"
            :key="index"
          >
            <router-link
              v-if="feature.link"
              :to="feature.link"
            >
              <img
                class="feature-img"
                v-if="feature.imgUrl"
                :src="$withBase(feature.imgUrl)"
                :alt="feature.title"
              />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </router-link>
            <span
              v-else
            >
              <img
                class="feature-img"
                v-if="feature.imgUrl"
                :src="$withBase(feature.imgUrl)"
                :alt="feature.title"
              />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </span>
          </div>
        </div>
        <!-- PC端features块 e -->
      </div>

    <div class="home-middle">
      <div class="section-title">  项目 · 案例 </div>
      <div v-if="homeData.boxList">
         <home-box v-for="(item, index) in homeData.boxList" :key="index" :position="index % 2 === 0 ? 'left' : 'right'" :item="item"></home-box>
      </div>
    
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import HomeTitle from "@theme/components/HomeTitle";
import HomeBox from "@theme/components/HomeBox";
export default defineComponent({
  components: {HomeTitle, HomeBox},
  setup(props, ctx) {
    const bannerBgStyle = computed(() => {
      // return "background: rgb(40,40,45) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVFhH7c6xCQAgDAVRR9A6E4hLu4uLiWJ7tSnuQcIvr2TRYsw3/zOGGEOMIcYQY4gxxBhiDDGGGEOMIcYQY4gxxBhiDLkx52W4Gn1tuslCtHJvL54AAAAASUVORK5CYII=)";
      return "background:url('/img/banner1.gif') 0% 40%;; background-size: cover;  width: 100%; height: 100%"
    });
    const homeData = computed(() => {
      return { ...ctx.root.$page.frontmatter };
    });
    return {
      bannerBgStyle,
      homeData,
    };
  },
});
</script>
<style lang="stylus" scoped>
.home-wapper
  margin-top: $navbarHeight;
  // background $lightColor1
  width 100vw
 .banner
    width 100%
    height 500px
    position relative
    .img
      width 100%
      height 100%
  .section-title
    margin-top 1.5rem
    font-size 28px
    color #333
    font-family Arial, Helvetica, sans-serif
    text-align center
 .brief
    width 100%
    min-height 500px
    color $bannerTextColor
    cursor:pointer;
    position relative
    overflow hidden
  // pc端features
      .features
        background azure
        padding 2rem 0
        margin-top 1.5rem
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .feature
        flex-grow 1
        flex-basis 30%
        max-width 30%
        text-align center
        span
          // color lighten($bannerTextColor,10%)
          color inherit
          .feature-img
            width 10rem
            height 10rem
            animation heart 0.8s ease-in-out 0s infinite alternate
            animation-play-state paused
          h2
            font-weight 500
            font-size 1.3rem
            border-bottom none
            padding-bottom 0
            color #343a40
          p
            opacity 0.8
            padding 0 0.8rem
            color #343a40
      .feature:hover
        .feature-img
          animation-play-state running
        h2, p
          color $accentColor
  // 分页不在第一页时，隐藏banner栏
  .banner.hide-banner
    display none
    & + .main-wrapper
      margin-top ($navbarHeight + 0.9rem)
  .home-middle
    width 100%
    min-height 800px  
@keyframes heart
  from
    transform translate(0, 0)
  to
    transform translate(0, 16px)
</style>
