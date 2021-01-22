<template>
  <i :class="getClass(icon)">
    <slot></slot>
  </i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const ICON_REGEXP = /^(\w+)\-/
    function getClass(icon) {
      if (ICON_REGEXP.test(icon)) {
        return icon.replace(ICON_REGEXP, (...args) => {
          return args[1] === 'iconvcom' ? `iconfont ${args[0]}` : `${args[1]} ${args[0]}`
        })
      }
      return ''
    }

    function go(link) {
      if (link === '') return
      window.open(link)
    }
    return {
      getClass,
      go
    }
  }
}
</script>
