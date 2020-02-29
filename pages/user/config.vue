<template>
  <div class="config">
    <div class="content">
      <div class="avator">
        <n-link to="/user/id">
          <v-avatar size="120">
            <img
              src="~/static/images/saito.jpeg"
              alt="John"
            >
          </v-avatar>
        </n-link>
      </div>
      <v-divider class="divider" />

      <v-row>
        <v-col cols="12">
          <v-row justify="left">
            <v-col
              cols="4"
              md="2"
              justify="center"
            >
              <div class="col">
                <div>
                  <n-link to="/user/edit">
                    <v-icon size="8rem">
                      mdi-account-circle-outline
                    </v-icon>
                    <p>プロフィール編集</p>
                  </n-link>
                </div>
              </div>
            </v-col>

            <v-col
              cols="4"
              md="2"
            >
              <div class="col">
                <div>
                  <v-icon size="8rem">
                    mdi-account-circle-outline
                  </v-icon>
                  <p>ポートフォリオ</p>
                </div>
              </div>
            </v-col>

            <v-col
              cols="4"
              md="2"
            >
              <div class="col">
                <div>
                  <v-icon size="8rem">
                    mdi-account-circle-outline
                  </v-icon>
                  <p>お気に入り</p>
                </div>
              </div>
            </v-col>

            <v-col
              cols="4"
              md="2"
            >
              <div class="col">
                <div>
                  <v-icon size="8rem">
                    mdi-account-circle-outline
                  </v-icon>
                  <p>ログアウト</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
.config
    display: flex
    justify-content: center
    align-items: center
.content
    width: 100%
.avator
    text-align: center
    margin-bottom: 20px
    margin-top: 10px
.col
    display: flex
    justify-content: center
    align-items: center
</style>
