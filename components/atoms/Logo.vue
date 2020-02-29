<template>
  <n-link to="/">
    <img src="~/static/images/logo.svg" :style="{ width: logoWidth }">
  </n-link>
</template>

<script lang="ts">
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
