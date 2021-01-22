'use strict'
import postsMixin from '@theme/mixins/posts'
import { addLinkToHead } from '@theme/helpers/utils'
import VueCompositionAPI from '@vue/composition-api'

export default ({
  Vue
}) => {
  Vue.use(VueCompositionAPI)
  Vue.mixin(postsMixin)
  addLinkToHead('//at.alicdn.com/t/font_2319125_nckqzpcxnhg.css')
}
