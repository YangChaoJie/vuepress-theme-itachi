<script>
import { defineComponent, computed, onMounted } from '@vue/composition-api'
import { isActive } from '@theme/helpers/utils'

export default defineComponent({
  setup (props, ctx) {
    const { root } = ctx

    const headers = computed(() => {
      return root.$showSubSideBar ? root.$page.headers : []
    })

    const isLinkActive = (header) => {
      const active = isActive(root.$route, root.$page.path + '#' + header.slug)
      // console.log('active-----', active);
      if (active) {
        setTimeout(() => {
          document.querySelector(`.reco-side-${header.slug}`).scrollIntoView()
        }, 300)
      }
      return active
    }

    onMounted(() => {
      // console.log('SubSidebar--', root);
    })

    return { headers, isLinkActive }
  },
  render (h) {
    if (this.headers.length > 0) {
          return h('ul', {
            class: { 'sub-sidebar-wrapper': true },
            style: { width: this.headers.length > 0 ? '12rem' : '0'}
          }, [
          ...this.headers.map(header => {
              return h('li', {
                class: {
                  active: this.isLinkActive(header),
                  [`level-${header.level}`]: true
                },
              attr: { key: header.title }
          }, [
              h('router-link', {
               class: { 'sidebar-link': true, [`reco-side-${header.slug}`]: true },
                props: { to: `${this.$page.path}#${header.slug}` }
              }, header.title)
          ])
      })
    ]) 
    }
  }
})
</script>

<style lang="stylus" scoped>
@require '../styles/index.styl';
.sub-sidebar-wrapper
  background var(--sidebarBg)
  width 12rem
  padding-left 0
  list-style none
  font-size 12px
  li
    padding .2rem 0
    cursor pointer
    background var(--sidebarBg)
    border-left 1px solid var(--borderColor)
    a
      padding 0.35rem 1rem 0.35rem 0rem
      color var(--textColor)
      background var(--sidebarBg)
    &:hover
      a
       color $accentColor
    &.active
      border-left 1px solid $accentColor
      a
       color $accentColor
    &.level-1
      padding-left .4rem
    &.level-2
      padding-left .9rem
    &.level-3
      padding-left 1.5rem
</style>

