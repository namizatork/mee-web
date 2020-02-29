<template>
  <div>
    <v-parallax
      height="180"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    />
    <div class="header">
      <div class="icon">
        <v-avatar size="120" class="avator">
          <img
            src="~/static/images/saito.jpeg"
            alt="John"
          >
        </v-avatar>
        <div class="icon__bg" />
      </div>
      <div class="content">
        <div class="content__title">
          Namizato
        </div>
        <div class="content__language">
          <a class="content__language__tag content__language__tag_cl-lang">
            PHP
          </a>
          <a class="content__language__tag content__language__tag_cl-fw">
            Laravel
          </a>
        </div>
      </div>
    </div>
    <div class="description">
      <p>
        大阪在住 フリーランスでデザイン・プログラムをしています
      </p>
    </div>
    <v-divider class="divider" />
    <div class="information">
      <p class="information__title">
        基本情報
      </p>
      <v-row>
        <v-col cols="12">
          <v-row justify="left">
            <v-col
              cols="5"
              md="2"
            >
              <div class="cols">
                <div class="col__title">
                  <p>プロフィール編集</p>
                </div>
              </div>
            </v-col>

            <v-col
              cols="7"
              md="2"
            >
              <div class="cols">
                <div>
                  <p>PHP / C言語 / Ruby / Python</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider class="divider" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  layout: 'user',
  setup () {
  }
})
</script>
<style lang="sass" scoped>
.icon
    position: relative
    width: 140px
    height: 140px
    margin-right: 10px
.avator
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 2
.icon__bg
    width: 140px
    height: 140px
    background-color: #fff
    position: absolute
    z-index: 1
    border-radius: 50%
.content__title
    font-size: 25px
    font-weight: bold
    line-height: 1.0
    margin-bottom: 10px
.content__language
    margin-bottom: 5px
.content__language__tag
    display: inline-block
    font-size: 14px
    font-weight: bold
    padding: 2px 15px 3px 15px
    margin-right: 5px
    background-color: #ddd
    border-radius: 20px
    color: #000
.content__language__tag_cl-lang
    background: #B0F5AF
.content__language__tag_cl-fw
    background: #FFE7AA
.header
    display: flex
    justify-content: center
    align-items: center
    transform: translate(0%, -15%)
.description
    text-align: center
    font-size: 1.2rem
    font-weight: bold
    padding: 0 20px
    p
        text-align: left
        display: inline-block
.divider
    width: 90%
    text-align: right
    margin-left: 10%
.information
    width: 80%
    margin: 0 auto
    padding: 20px 20px 0 20px
.information__title
    font-weight: bold
    font-size: 1.8rem
    margin-bottom: 0
.cols
    font-size: 1.4rem
.col__title
    color: #FF347D
    font-weight: bold
</style>
