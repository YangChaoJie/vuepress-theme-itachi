<template>
  <div class="nav-links">
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link">
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"/>
      <NavLink
        v-else
        :item="item"/>
    </div>
  </div>
</template>

<script>
import { resolveNavLinkItem } from '@theme/helpers/utils'
import NavLink from '@theme/components/NavLink'
import DropdownLink from '@theme/components/DropdownLink';

export default {
  components: { NavLink, DropdownLink },
  computed: {
    userLinks () {
      return (this.$themeConfig.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    }
  },
  mounted () {
    // console.log(this.userLinks)
  }
}
</script>

<style lang="stylus">
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--textColor)
    &:hover, &.router-link-active
      color $accentColor
      .iconfont
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>