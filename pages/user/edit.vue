<template>
  <div class="edit">
    <div class="content">
      <div class="avator">
        <n-link to="/user/config">
          <v-avatar size="120">
            <img
              src="~/static/images/saito.jpeg"
              alt="John"
            >
          </v-avatar>
        </n-link>
      </div>
      <div class="form">
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

          <v-select
            label="言語"
            outlined
          />

          <v-btn
            depressed
            color="#FF89D0"
            width="100%"
            class="white--text button"
          >
            変更する
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
  },
  setup () {
  }
})
</script>
<style lang="sass" scoped>
.edit
    display: flex
    justify-content: center
    align-items: center
.content
    width: 100%
.avator
    text-align: center
    margin-bottom: 20px
    margin-top: 10px
.form
    display: flex
    justify-content: center
.v-btn__content
    font-size: 1.5rem
.v-input
    margin-bottom: 10px
.button
    margin-top: 20px
    font-size: 1.3rem
    font-weight: bold
</style>
