<template>
  <nav class="ly_navbar d_flex ju_between al_center">
      <ul class="ly_navbar_tabList d_flex gap_15">
          <li class="ly_navbar_tabList_item">
            <NuxtLink to="/buylist">買い物リスト</NuxtLink>
          </li>
          <li class="ly_navbar_tabList_item">
            <NuxtLink to="/stocklist">在庫リスト</NuxtLink>
          </li>
      </ul>

      <button class="ly_navbar_user bcol_orange col_white d_flex al_center ju_center" type="button" v-on:click="toggleShowSidebar">
        <i class="fas fa-user"></i>
      </button>

      <div class="ly_navbar_sidebar" v-bind:class="{'isActive':isShowSidebar}">
        <p class="tx_right" v-on:click="hiddenSidebar">
          メニューを閉じる
          <i class="fas fa-chevron-right"></i>
        </p>
        <ul class="ly_navbar_sidebar_manuList d_grid fs_15 mt_30">
          <li class="ly_navbar_sidebar_manuList_item">
            <NuxtLink to="/my_page">マイページ</NuxtLink>
          </li>
          <li class="ly_navbar_sidebar_manuList_item">
            <NuxtLink to="/buylist">買い物リスト</NuxtLink>
          </li>
          <li class="ly_navbar_sidebar_manuList_item">
            <NuxtLink to="/stocklist">在庫リスト</NuxtLink>
          </li>
          <li class="ly_navbar_sidebar_manuList_item">
            <button class="el_btn col_theme col_white mx_auto d_bl" type="button" v-on:click="signOut">ログアウト</button>
          </li>
        </ul>
      </div>
      <p class="ly_navbar_flashMessage" v-bind:class="{isActive:isActiveFlashMessage}">{{ flashMessage }}</p>

      <b-modal id="limit-modal" title="期限の報告" hide-footer>
        <p class="mt_15">期限が迫っているアイテムがあります。</p>
        <ul>
          <li v-for="(item, itemKey) in alertStockList" v-bind:key="itemKey">
            ・{{ item.name }}
          </li>
        </ul>
        <div class="d_flex mt_30 gap_15">
          <button class="el_btn bcol_orange col_white" type="button" v-on:click="checkAlert">確認する</button>
        </div>
      </b-modal>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      isShowSidebar: false,
      alertStockList:[],
    }
  },
  methods:{
    // サイドバーのオンオフ
    toggleShowSidebar(){
      this.isShowSidebar = !this.isShowSidebar;
    },
    hiddenSidebar(){
      this.isShowSidebar = false;
    },
    signOut(){
      this.$fb.auth().signOut();
      this.$router.push("/");
    },
    async alertStock(){
      this.alertStockList = await this.$alertStocks();
      if (this.alertStockList.length > 0) {
        this.showModal();
      }
    },
    // 確認モーダルを表示
    async showModal(){
      this.$bvModal.show('limit-modal')
    },
    // 確認モーダルを閉じる
    async hideModal(){
      this.$bvModal.hide('limit-modal')
    },
    async checkAlert(){
      this.$router.push("stocklist");
      this.hideModal();
    }
  },
  mounted(){
    /*------------------------- リスト外クリック 非アクティブ化 -------------------------*/
    document.addEventListener('click', (e) => {
      if(!e.target.closest(`.ly_navbar_sidebar`) && !e.target.closest(`.ly_navbar_user`)) {
        this.hiddenSidebar();
      }
    });

    this.alertStock();

  },
  computed:{
    flashMessage(){
      return this.$store.state.flashMessage.text;
    },
    isActiveFlashMessage(){
      return this.$store.state.flashMessage.status;
    },
  }
}
</script>

<style lang="scss" scoped>
$col_black: #777 !default;
$col_black_dark: #404040 !default;
$col_gray: #aaa !default;
$col_gray_sub: #f8f8f8 !default;
$col_gray_sub2: #f5f5f5 !default;
$col_gray_sub3: #eee !default;
$col_gray_sub4: #e9e9e9 !default;
$col_gray_sub5: #f2ebe7 !default;
$col_gray_sub6: #797979 !default;
$col_gray_light: #bababa !default;
$col_gray_light_sub: #7b7b7b !default;
$col_gray_dark: #eb5d75 !default;
$col_gray_light_sub2: #a3a3a3 !default;
$col_gray_sub_m: #808080 !default;
$col_white: #fff !default;
$col_yellow: #fed840 !default;
$col_yellow_sub: #f9f1e1 !default;
$col_gold: #cea64f !default;
$col_gold_sub: #f5eddc !default;
$col_red: #ea4343 !default;
$col_blue: #548ec9 !default;
$col_blue_sub: #dde8f4 !default;
$col_theme: #fd4f73 !default;
$col_theme_2: #e86d72 !default;
$col_theme_gray: #e0d2d2 !default;
$col_theme_light: #fbf7f5 !default;
$col_theme_light_2: #f8f5ef !default;
$col_theme_sub_m: #f18d9e !default;
$col_theme_sub: #ffedf1 !default;
$col_theme_2_sub: #fbdfe3 !default;
$col_accent: #00b09c !default;
$col_accent_sub_m: #78c49c !default;
$col_accent_sub: #d9efeb !default;
$col_accent_sub2: #f2ebe7 !default;
$col_orange: #ff6a06 !default;
  .ly_navbar{
    position: fixed;
    height: 60px;
    width: 100%;
    padding: 0 5%;
    top: 0;
    left: 0;
    z-index: 10;
    &_tabList{
      &_item{
        border-bottom: 1px solid $col_gray_light;
        padding-bottom: 5px;
        &.isActive{
          border-bottom: 1px solid $col_theme;
        }
      }
    }
    &_user{
      border-radius: 50%;
      width: 20px;
      height: 20px;
      padding: 20px;
    }
    &_sidebar{
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100vh;
      width: 90vw;
      padding: 10px 20px;
      transform: translateX(100%);
      transition: 0.3s;
      background: $col_gray_sub2;
      &.isActive{
        transform: unset;
      }
      &_manuList{
        &_item{
          padding: 20px 0;
          &:not(:last-child){
            border-bottom: 1px solid $col_gray_light;
          }
        }
      }
    }
    &_flashMessage{
      position: fixed;
      top: 10px;
      right: 0px;
      transition: 0.3s;
      transform: translateX(100%);
      background: $col_white;
      border: 3px solid $col_accent;
      border-radius: 5px;
      opacity: 0;
      padding: 5px 10px;
      &.isActive{
        right: 5vw;
        transform: unset;
        opacity: 1;
      }
    }
  }
</style>