<template>
  <div class="vcom-common" :class="pageClasses">
    <transition-group name="fade">
      <Loading v-show="firstLoad" class="vcom-loading-wrapper" :key="1" />
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
        :key="2"
      />
      <div class="sidebar-mask" :key="3" v-if="shouldShowSidebar"></div>
      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar" :key="4">
      </Sidebar>

      <Buttons
      ref="buttons"
      :key="5"
      @toggle-theme-mode="toggleThemeMode"
    />
    </transition-group>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted, watch, reactive, toRefs, onBeforeMount } from '@vue/composition-api'
import Loading from '@theme/components/Loading'
import Navbar from '@theme/components/Navbar'
import Sidebar from '@theme/components/Sidebar'
import Buttons from '@theme/components/Buttons.vue'
export default defineComponent({
  components: { Loading, Navbar, Sidebar, Buttons},
  props: {
    sidebar: {
      type: Boolean,
      default: true,
    },
    sidebarItems: {
      type: Array,
      default: () => [],
    },
    recoShowModule: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const { root } = ctx,
      firstLoad = ref(true),
      isSidebarOpen = ref(true),
      shouldShowSidebar = computed(() => props.sidebarItems.length > 0),
      shouldShowNavbar = computed(() => {
        let { themeConfig } = root.$site,
          { frontmatter } = root.$page
        if (frontmatter.navbar === false || themeConfig.navbar === false)
          return false
        return (
          root.$title ||
          themeConfig.logo ||
          themeConfig.repo ||
          themeConfig.nav ||
          root.$themeLocaleConfig.nav
        )
      })

      const pageClasses = computed(() => {
      const userPageClass = root.$frontmatter.pageClass
      return {
        ...{
          'no-navbar': !shouldShowNavbar.value,
          'sidebar-open': isSidebarOpen.value,
          'no-sidebar': !shouldShowSidebar.value
        },
        ...userPageClass
      }
    })
    // console.log(ctx)
    const toggleSidebar = (to) => {
      // console.log('------点击1234',to)
      isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
    }

    const mode = reactive({
      themeMode:'light',
      count: 1
    })
    const add = () => mode.count++
    watch(() => mode.themeMode, (newVal, oldVal) => {
      console.log("watch searchInput:", newVal, oldVal);
      setBodyClass()
    })
    function handleLoading() {
      const time =
        root.$frontmatter.home &&
        sessionStorage.getItem('firstLoad') == undefined
          ? 1000
          : 100
      setTimeout(() => {
        firstLoad.value = false
        if (sessionStorage.getItem('firstLoad') == undefined)
          sessionStorage.setItem('firstLoad', false)
      }, time)
    }
    function setBodyClass () {
      document.body.className = 'theme-mode-' + mode.themeMode
    }
    function autoMode () {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // 系统处于深色模式
        mode.themeMode = 'dark'
      } else {
        mode.themeMode = 'light'
      }
    }
    function toggleThemeMode (key) {
      if (key === 'auto') {
        autoMode()
      } else {
        mode.themeMode = key
      }
        // add()
      localStorage.setItem('mode', key)
    }
    onBeforeMount(() => {
      setBodyClass()
    })
    onMounted(() => {
      handleLoading()
    })
    return {
      shouldShowNavbar,
      firstLoad,
      toggleSidebar,
      pageClasses,
      toggleThemeMode,
      shouldShowSidebar,
      ...toRefs(mode)
    }
  },
})
</script>

<style lang="stylus" scoped>
.vcom-common
  width 100vw
</style>
