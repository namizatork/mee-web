<template>
  <div>
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import UserCard from '@/components/organisms/UserCard.vue'

export default createComponent({
  components: {
    UserCard
  }
})
</script>
<style lang="sass" scoped>
</style>
