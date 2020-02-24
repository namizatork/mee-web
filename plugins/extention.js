import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.mixin({
  methods: {
    $console: (...args) => {
      // eslint-disable-next-line
      console.dir(args)
    },
    $isset: (data) => {
      return !(data === '' || data === null || data === undefined)
    }
  }
})
