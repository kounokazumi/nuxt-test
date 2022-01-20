<template>
  <div class="bl_itemManage">
    <Navbar/>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30">
      <li class="bl_itemManage_list_item d_grid al_center gap_15 p_rel">
        <input class="bl_itemManage_list_item_check" type="checkbox" name="" id="">
        <span class="bl_itemManage_list_item_status col_theme">あと3日</span>
        <p class="bl_itemManage_list_item_name">アイテム名が入ります</p>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-plus-circle"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    // コンポーネント呼び出し
    components: {
      Navbar: () => import('~/layouts/navbar')
    },
    
}
</script>

