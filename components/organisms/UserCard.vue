<template>
  <div class="usercard">
    <div class="icon">
      <img src="images/saito.jpeg" alt="Namizato">
    </div>
    <div class="content">
      <div class="content__title">
        Namizato
      </div>
      <div class="content__config">
        11年 / 大阪府 / 男性
      </div>
      <div class="content__language">
        <a class="content__language__tag content__language__tag_cl-lang">
          PHP
        </a>
        <a class="content__language__tag content__language__tag_cl-fw">
          Laravel
        </a>
      </div>
      <div class="content__status">
        <a class="content__status__tag">
          # フリーター
        </a>
        <a class="content__status__tag">
          # Web系やりたい
        </a>
        <a class="content__status__tag">
          # 転職中
        </a>
        <a class="content__status__tag">
          # フリーター
        </a>
        <a class="content__status__tag">
          # Web系やりたい
        </a>
        <a class="content__status__tag">
          # フリーター
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.usercard
    display: flex
    padding-bottom: 10px
    margin-bottom: 10px
    position: relative
    &:after
      content: ''
      height: 0.5px
      width: 100%
      background: #ccc
      position: absolute
      bottom: 0
      right: -5%
.icon
    margin-right: 15px
    img
        width: 120px
        border-radius: 10px
        border: 1px solid #ddd
.content__title
    font-size: 25px
    font-weight: bold
    line-height: 1.0
.content__config
    font-size: 12px
    color: #aaa
    margin-bottom: 5px
    font-weight: bold
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
.content__status__tag
    display: inline-block
    font-size: 10px
    margin-right: 5px
    color: #FFAAAA
    font-weight: bold
.content__language__tag_cl-lang
    background: #B0F5AF
.content__language__tag_cl-fw
    background: #FFE7AA
</style>
