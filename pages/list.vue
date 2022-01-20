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

<style lang="scss">
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

.bl_itemManage{
  width: 100%;
  &_list{
    width: 100%;

    &_item{
      grid-template-columns: 30px 1fr 60px;
      border-bottom: 1px dashed $col_gray_light;
      padding: 10px 10px;

      &_icons{
        grid-template-columns: 1fr 1fr;
        font-size: 18px;
        &_success{
          color: $col_accent;
        }
  
        &_error{
          color: $col_theme;
        }
      }
    }
  }
  &_addBtn{
    width: 100%;
    padding: 10px 0px;
    border: none;
    font-size: 25px;
    &_icon{
      color: $col_orange;
    }
  }
}
</style>
