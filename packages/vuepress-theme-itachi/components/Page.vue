<template>
  <main class="page" :style="pageStyle">
    <ModuleTransition>
      <div v-if="recoShowModule && $page.title" class="page-title">
        <h1 class="title">{{ $page.title }}</h1>
        <PageInfo
          :pageInfo="$page"
          :showAccessNumber="showAccessNumber"
        ></PageInfo>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <Content v-if="recoShowModule" class="theme-yj-content" />
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <footer v-if="recoShowModule" class="page-edit">
        <div class="edit-link" v-if="editLink">
          <a :href="editLink" target="_blank" rel="noopener noreferrer">{{
            editLinkText
          }}</a>
          <OutboundLink />
        </div>

        <div class="last-updated" v-if="lastUpdated">
          <span class="prefix">{{ lastUpdatedText }}: </span>
          <span class="time">{{ lastUpdated }}</span>
        </div>
      </footer>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <div class="page-nav" v-if="recoShowModule && (prev || next)">
        <p class="inner">
          <span v-if="prev" class="prev">
            ←
            <router-link v-if="prev" class="prev" :to="prev.path">
              {{ prev.title || prev.path }}
            </router-link>
          </span>

          <span v-if="next" class="next">
            <router-link v-if="next" :to="next.path">
              {{ next.title || next.path }}
            </router-link>
            →
          </span>
        </p>
      </div>
    </ModuleTransition>

    <!-- <ModuleTransition delay="0.32">
      <Comments v-if="recoShowModule" :isShowComments="shouldShowComments"/>
    </ModuleTransition> -->

    <ModuleTransition delay="0.08">
      <SubSidebar v-if="recoShowModule" class="side-bar" />
    </ModuleTransition>
  </main>
</template>

<script>
import PageInfo from '@theme/components/PageInfo'
import { resolvePage, outboundRE, endingSlashRE } from '@theme/helpers/utils'
import ModuleTransition from './ModuleTransition'
import SubSidebar from '@theme/components/SubSidebar'

export default {
  components: { PageInfo, ModuleTransition, SubSidebar },

  props: ['sidebarItems'],

  data () {
    return {
      isHasKey: true
    }
  },
  mounted () {
    // console.log('this---123', this, 'parent', this.$parent);
  },
  computed: {
    recoShowModule () {
      return this.$parent.recoShowModule
    },
    // 是否显示评论
    shouldShowComments () {
      const { isShowComments } = this.$frontmatter
      const { showComment } = this.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    },
    showAccessNumber () {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = this

      const vc = valineLocalConfig || valineConfig
      if (vc && vc.visitor != false) {
        return true
      }
      return false
    },
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$themeConfig.lastUpdated === 'string') {
        return this.$themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
    prev () {
      const prev = this.$frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },
    next () {
      const next = this.$frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },
    editLink () {
      if (this.$frontmatter.editLink === false) {
        return false
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
      return ''
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText || this.$themeConfig.editLinkText || `Edit this page`
      )
    },
    pageStyle () {
      return this.$showSubSideBar ? {} : { paddingRight: '0' }
    }
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '') +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '') +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
        path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl';
@require '../styles/index.styl';
.page {
  padding-bottom: 2rem;
  padding-top: 5rem;
  display: block;

  @media (max-width: $MQMobile) {
    padding-top: $navbarHeight;
  }

  @media (min-width: $MQMobile) {
    padding-top: ($navbarHeight + 1.5rem);
  }

  >* {
    @extend $yj-wrapper;
  }

  .side-bar {
    position: fixed;
    top: 10rem;
    bottom: 10rem;
    right: 2rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: $accentColor;
    }

    .time {
      margin-left: 5px;
      font-weight: 400;
      color: #aaa;
      font-size: 0.8em;
    }
  }
}

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--border-color)
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

/**
 * 右侧菜单的自适应
 */
@media (min-width: 720px) and (max-width: 1279px) {
  .have-rightmenu {
    .page {
      padding-right: 0.8rem !important;
    }
  }
}

@media (max-width: 1279px) {
  .sub-sidebar-wrapper {
    display: none;
  }
  .page {
    padding-left: 200px !important; 
  }
}

@media (max-width: 1450px) {
  .sidebar {
    width: 15rem !important;
  }
  .sidebar-button {
    left:15rem !important;
  }
}
@media (max-width: 1100px) {
  .sidebar {
    display: none;
  }
  .sidebar-button {
    display: none;
  }
  .page {
    padding-left: 0.8rem !important;  
  }
}
@media (min-width: 1280px) {
  .have-rightmenu {
    .sidebar .sidebar-sub-headers {
      display: none;
    }
  }
}
</style>
