<template>
  <header>
    <div class="content">
      <div class="content__logo">
        <Logo logo-width="9.7rem" />
      </div>
      <div class="search d-none d-sm-flex d-md-flex d-lg-flex">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          filled
          rounded
          dense
          hide-details
          background-color="#D8F2F2"
        />
        <div class="search__manipulate">
          <a href="#">
            <img src="~/static/images/manipulate.svg" alt="">
          </a>
        </div>
      </div>
      <div class="content__icon">
        <a href="#" @click="toggleModal">
          <v-icon>mdi-account-outline</v-icon>
        </a>
      </div>
      <div class="content__icon">
        <template v-if="loggedIn">
          <a href="#" @click="toggleModal">
            <v-icon>mdi-account-outline</v-icon>
          </a>
        </template>
        <template v-else>
          <n-link to="/user/config">
            <v-avatar size="38">
              <img
                src="~/static/images/saito.jpeg"
                alt="John"
              >
            </v-avatar>
          </n-link>
        </template>
      </div>
    </div>
    <div class="search search__sm d-sm-none">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        filled
        rounded
        dense
        hide-details
        background-color="#D8F2F2"
      />
      <div class="search__manipulate">
        <a href="#">
          <img src="~/static/images/manipulate.svg" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import Logo from '@/components/atoms/Logo.vue'

const toggleVisible = async (store) => {
  await store.dispatch('guest_modal/toggleVisible')
}

export default defineComponent({
  components: {
    Logo
  },
  setup (props, { root }) {
    const store = root.$store
    const loggedIn = ref(false)

    const toggleModal = () => {
      toggleVisible(store)
    }

    return {
      toggleModal,
      loggedIn
    }
  }
})
</script>

<style lang='sass' scoped>
header
    padding: 15px 15px 0 15px
    border-bottom: 1px solid #ddd
.content
    display: flex
    align-items: center
    margin-bottom: 15px
    .search
        margin-left: 20px
.content__icon
    background-color: #C4C4C4
    padding: 5px
    border-radius: 20px
    width: 38px
    height: 38px
    display: flex
    justify-content: center
    align-items: center
    margin-left: auto
.search
    display: flex
    align-items: center
.search__manipulate
    margin-left: 15px
.search__sm
    margin-bottom: 15px
</style>
