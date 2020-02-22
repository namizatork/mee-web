<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import Header from '@/components/organisms/Header.vue'

export default createComponent({
  components: {
    Header
  }
})
</script>

<style lang="sass">
li
    list-style-type: none
a
    text-decoration: none
    &:hover
        opacity: .5
html
    font-size: 62.5%
    font-family: 'YuGothic', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'メイリオ', 'Meiryo', 'ＭＳ ゴシック', sans-serif
.container
    padding: 20px
</style>
