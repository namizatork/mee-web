<template>
  <div class="content">
    <div class="form">
      <div class="logo">
        <Logo logo-width="15rem" />
      </div>
      <v-form
        ref="form"
        name="valid"
      >
        <v-text-field
          label="email"
          name="name"
          required
          outlined
          hide-details
        />

        <v-text-field
          label="password"
          name="password"
          append-icon="mdi-eye"
          type="text"
          outlined
          depressed
          hide-details
        />

        <v-btn
          depressed
          color="#FF89D0"
          width="100%"
          class="white--text button"
        >
          ログイン
        </v-btn>
      </v-form>
      <n-link to="register" class="register">
        新規登録はこちらから
      </n-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Logo from '@/components/atoms/Logo.vue'

export default defineComponent({
  layout: 'noHeader',
  components: {
    Logo
  },
  setup () {
  }
})
</script>
<style lang="sass" scoped>
.content
    display: flex
    justify-content: center
    align-items: center
    height: calc(100vh - 40px)
    width: 100%
    padding-bottom: 20px
.logo
    text-align: center
    width: 100%
    margin-bottom: 30px
.v-btn__content
    font-size: 1.5rem
.v-input
    margin-bottom: 10px
.button
    margin-top: 20px
    font-size: 1.3rem
    font-weight: bold
.register
    text-align: center
    margin-top: 20px
    width: 100%
    display: block
    font-size: 1.2rem
</style>
