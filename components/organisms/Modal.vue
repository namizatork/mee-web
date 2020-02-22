<template>
  <div class="overlay" @click="toggleModal">
    <div class="content">
      <slot />
      <div class="footer">
        <slot name="footer">
          <v-btn
            color="secondary"
            depressed
            @click="toggleModal"
          >
            Close
          </v-btn>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props, { emit }) {
    const toggleModal = () => {
      emit('from-child')
    }

    return {
      toggleModal
    }
  }
})
</script>

<style lang="sass" scoped>
.overlay
    z-index: 1
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    display: flex
    align-items: center
    justify-content: center

.content
  z-index: 2
  width: 50%
  padding: 20px
  background: #fff
  border-radius: 10px

.footer
  display: flex
  justify-content: space-between
</style>
