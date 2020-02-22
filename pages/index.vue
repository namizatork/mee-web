<template>
  <div>
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <Modal v-show="store.getters['guest_modal/getVisible']" name="login_or_register" @from-child="toggleModal">
      <template slot="footer">
        <v-btn
          color="#000"
          width="48%"
          depressed
          outlined
          @click="toggleModal"
        >
          ログイン
        </v-btn>
        <v-btn
          color="#FF89D0"
          width="48%"
          depressed
          class="white--text"
          @click="toggleModal"
        >
          新規登録
        </v-btn>
      </template>
    </Modal>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import UserCard from '@/components/organisms/UserCard.vue'
import Modal from '@/components/organisms/Modal.vue'

const toggleVisible = async (store) => {
  await store.dispatch('guest_modal/toggleVisible')
}

export default defineComponent({
  components: {
    UserCard,
    Modal
  },
  setup (props, { root }) {
    const store = root.$store

    const toggleModal = () => {
      console.log('aaa')
      toggleVisible(store)
    }

    return {
      store,
      toggleModal
    }
  }
})
</script>
<style lang="sass" scoped>
.v-btn__content
  font-size: 1.3rem
</style>
