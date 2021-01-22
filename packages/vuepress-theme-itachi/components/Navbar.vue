<template>
  <header class="vcom-navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
    <router-link
      :to="localePath"
      class="home-link">
      <img v-if="themeConfig.logo" class="logo" :src="themeConfig.logo" :alt="siteTitle">
      <span ref="siteName" v-if="siteTitle" class="site-name">{{siteTitle}}</span>
    </router-link>
    <div class="links"
      :style="linksWrapMaxWidth ? { 'max-width': linksWrapMaxWidth + 'px' } : {}"
    >
      <SearchBox
        v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
      />
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from '@vue/composition-api';
import NavLinks from '@theme/components/NavLinks';
import SidebarButton from '@theme/components/SidebarButton.vue'
import SearchBox from '@SearchBox'
export default defineComponent({
  components: { NavLinks, SidebarButton, SearchBox },
  setup (props, ctx) {
    let { root } = ctx,
      localePath = root.$localePath,
      siteTitle = root.$siteTitle,
      themeConfig = root.$themeConfig,
      linksWrapMaxWidth = null;
      function css (el, property) {
        // NOTE: Known bug, will return 'auto' if style value is 'auto'
        const win = el.ownerDocument.defaultView
        // null means not to return pseudo styles
        return win.getComputedStyle(el, null)[property]
      }
    onMounted (() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719
      const NAVBAR_VERTICAL_PADDING = parseInt(css(ctx.root.$el, 'paddingLeft')) + parseInt(css(ctx.root.$el, 'paddingRight'))
      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapMaxWidth = null
        } else {
          linksWrapMaxWidth = ctx.root.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (ctx.root.$refs.siteName && ctx.root.$refs.siteName.offsetWidth || 0)
        }
      }
      handleLinksWrapWidth()
      window.addEventListener('resize', handleLinksWrapWidth, false)
    })
    
    return {
      localePath,
      siteTitle,
      themeConfig,
      linksWrapMaxWidth
    }
  }
})
</script>

<style lang="stylus" scoped>
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.vcom-navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  box-shadow var(--box-shadow)
  background var(--bodyBg)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
    border-radius 50%
  .site-name
    font-size 1.2rem
    font-weight 600
    color var(--textColor)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    background-color var(--bodyBg)
    .search-box
      flex: 0 0 auto
      vertical-align top
  
</style>