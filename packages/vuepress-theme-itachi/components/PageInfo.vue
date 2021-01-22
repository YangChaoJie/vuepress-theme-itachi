<template>
  <div>
    <yj-icon
      v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title"
      icon="iconvcom-person"
    >
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </yj-icon>
    <yj-icon
      v-if="pageInfo.frontmatter.date"
      icon="iconvcom-time"
    >
      <span>{{ pageInfo.frontmatter.date | formatDateValue }}</span>
    </yj-icon>
    <yj-icon
      v-if="showAccessNumber === true"
      icon="iconvcom-check"
    >
      <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle" />
    </yj-icon>
    <yj-icon
      v-if="pageInfo.frontmatter.tags"
      icon="iconvcom-tag"
      class="tags"
    >
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)"
      >{{subItem}}</span>
    </yj-icon>
  </div>
</template>

<script>
import YjIcon from './YjIcon.vue'

export default {
  components: { YjIcon },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  filters: {
    formatDateValue (value) {
      let localDate = new Date(value).toLocaleString()
      if (value.split(' ').length === 1) localDate = localDate.split(' ')[0]
      return localDate
    }
  },
  methods: {
    goTags (tag) {
      if (this.$route.path !== `/tag/${tag}/`) {
        this.$router.push({ path: `/tag/${tag}/` })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.iconfont
  display inline-block
  line-height 1.5rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color $accentColor
    &:hover
      color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>
