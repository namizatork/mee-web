import Vue from 'vue'

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
