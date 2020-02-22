<template>
  <header>
    <div class="header__content">
      <div class="header__content__logo">
        <img src="images/logo.svg">
      </div>
      <div class="header__search d-none d-sm-flex d-md-flex d-lg-flex">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          filled
          rounded
          dense
          hide-details
          background-color="#D8F2F2"
        />
        <div class="header__search__manipulate">
          <a href="#">
            <img src="images/manipulate.svg" alt="">
          </a>
        </div>
      </div>
      <div class="header__content__icon">
        <a href="#">
          <v-icon>mdi-account-outline</v-icon>
        </a>
      </div>
    </div>
    <div class="header__search header__search__sm d-sm-none">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        filled
        rounded
        dense
        hide-details
        background-color="#D8F2F2"
      />
      <div class="header__search__manipulate">
        <a href="#">
          <img src="images/manipulate.svg" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<style lang='sass' scoped>
header
    padding: 15px 15px 0 15px
    border-bottom: 1px solid #ddd
.header__content
    display: flex
    align-items: center
    margin-bottom: 15px
    .header__search
        margin-left: 20px
.header__content__logo
    img
        width: 9.7rem
.header__content__icon
    background-color: #C4C4C4
    padding: 5px
    border-radius: 20px
    width: 38px
    height: 38px
    display: flex
    justify-content: center
    align-items: center
    margin-left: auto
.header__search
    display: flex
    align-items: center
.header__search__manipulate
    margin-left: 15px
.header__search__sm
    margin-bottom: 15px
</style>
