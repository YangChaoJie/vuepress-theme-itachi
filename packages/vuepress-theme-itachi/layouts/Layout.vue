<template>
  <div class="vcom-layout">
    <Common :recoShowModule="recoShowModule" :sidebar-items="sidebarItems">
      <Home v-if="$frontmatter.home"></Home>
      <Footer v-if="$frontmatter.home"/>
      <TimeLine v-else-if="$frontmatter.isTimeLine"> </TimeLine>
      <Page v-else :sidebar-items="sidebarItems" />
    </Common>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from "@vue/composition-api";
import Footer from "@theme/components/Footer";
import Home from '@theme/components/Home'
import Common from "@theme/components/Common";
import Page from "@theme/components/Page";

import { resolveSidebarItems } from "@theme/helpers/utils";
import moduleTransitonMixin from "@theme/mixins/moduleTransiton";
import TimeLine from '@theme/components/TimeLine'
export default defineComponent({
  components: { Common, Footer, Page, Home, TimeLine },
  mixins: [moduleTransitonMixin],
  setup(props, ctx) {
    const vue = ctx.root;
    const sidebarItems = computed(() => {
      return resolveSidebarItems(
        vue.$page,
        vue.$page.regularPath,
        vue.$site,
        vue.$localePath
      );
    });

    onMounted(() => {
      console.log("vue component", vue);
    })

    return {
      sidebarItems
    };
  },
});
</script>

<style lang="stylus">
body {
  margin: 0;
}
.vcom-layout {
  overflow hidden
}
</style>
