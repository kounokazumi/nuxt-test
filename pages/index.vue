<template>
  <div class="bl_top d_flex fl_dir_col al_center ju_between">
    <img class="bl_top_logo" src="~/assets/img/logo.png" alt="">
    <div class="d_grid ju_items_center gap_30">
      <NuxtLink class="el_btn bcol_orange col_white" to="/login">ログイン</NuxtLink>
      <NuxtLink class="el_btn bcol_orange col_white" to="/regist">新規会員登録</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.bl_top{
  height: 100%;
  &_logo{
    width: 150px;
  }
}
</style>