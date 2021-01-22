<template>
  <transition
    name="module"
    @enter="setStyle"
    @appear="setStyle"
    @after-enter="unsetStyle"
    @after-appear="unsetStyle"
    @before-leave="setStyle"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    delay: {
      type: String,
      default: '0'
    },
    duration: {
      type: String,
      default: '.25'
    },
    transform: {
      type: Array,
      default () {
        return ['translateY(-20px)', 'translateY(0)']
      }
    }
  },
  setup (props) {
    function setStyle (items) {
      items.style.transition = `transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`
      items.style.transform = this.transform[0]
      items.style.opacity = 0
    }
    function unsetStyle (items) {
      items.style.transform = this.transform[1]
      items.style.opacity = 1
    }
    return {
      setStyle,
      unsetStyle
    }
  }
}
</script>

<style>
</style>