<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact"
  >
    <i class="iconfont" :class="item.icon"></i>
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <yj-icon :icon="`${item.icon}`" />
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "@theme/helpers/utils";
import YjIcon from './YjIcon.vue';

export default {
  components: { YjIcon },

  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );
      }
      return this.link === "/";
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>
