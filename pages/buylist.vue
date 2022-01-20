<template>
  <div class="bl_itemManage">
    <Navbar/>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30">
      <li class="bl_itemManage_list_item d_grid al_center gap_15">
        <input class="bl_itemManage_list_item_check" type="checkbox" name="" id="">
        <p class="bl_itemManage_list_item_name">アイテム名が入ります</p>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-circle"></i>
          <i class="bl_itemManage_list_item_icons_error fas fa-minus-circle"></i>
        </div>
      </li>
    </ul>
    
    <button class="bl_itemManage_addBtn d_flex al_center ju_center">
      <i class="bl_itemManage_addBtn_icon fas fa-plus-circle"></i>
    </button>
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