<template>
  <n-link to="/">
    <img src="images/logo.svg" :style="{ width: logoWidth }">
  </n-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    logoWidth: {
      type: String,
      required: true,
      default: '9.7rem'
    }
  }
})
</script>

<style lang="sass" scoped>
</style>
