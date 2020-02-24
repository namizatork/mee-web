<template>
  <div>
    {{ $console(users.user_lists) }}
    <div v-if="$isset(users.user_lists) && $isset(users.user_lists.data)">
      <div v-for="user in users.user_lists.data" :key="user.id">
        <UserCard :name="user.user_name" />
      </div>
    </div>
    <div v-else>
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
    <Modal v-show="store.getters['guest_modal/getVisible']" name="login_or_register" @from-child="toggleModal">
      <template slot="footer">
        <v-btn
          color="#000"
          width="48%"
          depressed
          outlined
          @click.stop="toLogin"
        >
          ログイン
        </v-btn>
        <v-btn
          color="#FF89D0"
          width="48%"
          depressed
          class="white--text"
          @click.stop="toRegister"
        >
          新規登録
        </v-btn>
      </template>
    </Modal>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import UserCard from '@/components/organisms/UserCard.vue'
import Modal from '@/components/organisms/Modal.vue'
import userRepository from '@/repositories/mee_api/userRepository.js'

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
    const users = ref({})

    const toggleModal = () => {
      toggleVisible(store)
    }

    const toLogin = () => {
      toggleVisible(store)
      root.$router.push('login')
    }

    const toRegister = () => {
      toggleVisible(store)
      root.$router.push('register')
    }

    onMounted(async () => {
      users.value = (await userRepository.fetchUsers()).data
    })

    return {
      store,
      toggleModal,
      toLogin,
      toRegister,
      users
    }
  }
})
</script>
<style lang="sass" scoped>
.v-btn__content
  font-size: 1.3rem
</style>
