<template>
  <div class="bl_itemManage">
    <Navbar/>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30">
      <li class="bl_itemManage_list_item d_grid al_center gap_15" v-for="(item, itemKey) in shoppingList" v-bind:key="itemKey">
        <input class="bl_itemManage_list_item_check" type="checkbox" name="" id="">
        <NuxtLink class="bl_itemManage_list_item_name" v-bind:to="{name:'itemedit-id', params:{id:itemKey}}">{{ item.name }}</NuxtLink>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-circle"></i>
          <i class="bl_itemManage_list_item_icons_error fas fa-minus-circle" v-on:click="deleteShoppingItem(itemKey)"></i>
        </div>
      </li>
    </ul>
    
    <NuxtLink class="bl_itemManage_addBtn d_flex al_center ju_center" to="/itemregist">
      <i class="bl_itemManage_addBtn_icon fas fa-plus-circle"></i>
    </NuxtLink>
  </div>
</template>

<script>
export default{
  // コンポーネント呼び出し
  components: {
    Navbar: () => import('~/layouts/navbar')
  },

  data(){
    return {
      shoppingList:[],
    }
  },

  methods:{
    // DBから買い物リストを取得
    async getShopingList(){
      let userShopping = await this.$shoppingsGet();
      this.shoppingList = userShopping.list;
    },
    // DBの買い物リストを更新
    async updateShoppingList(){
      await this.$shoppingsUpdate(this.shoppingList);
    },
    // 買い物リストからアイテムを削除
    async deleteShoppingItem(index){
      this.shoppingList.splice(index,1);
      this.updateShoppingList();
    }
  },
  mounted(){
    this.getShopingList();
  }
    
}
</script>