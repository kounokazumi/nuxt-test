<template>
  <div class="bl_itemManage">
    <Navbar/>

    <p class="tx_center" v-if="stockList.length == 0">在庫が登録されていません</p>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30" v-else>
      <li class="bl_itemManage_list_item d_grid al_center gap_15 p_rel" v-for="(item, itemKey) in stockList" v-bind:key="itemKey">
        <input class="bl_itemManage_list_item_check" v-model="checkItems" v-bind:value="itemKey" type="checkbox" name="" id="">
        <span class="bl_itemManage_list_item_status col_theme" v-bind:class="'period_' + Math.floor(getPeriod(item.date) / 5)">あと{{ getPeriod(item.date) }}日</span>
        <NuxtLink class="bl_itemManage_list_item_name" v-bind:to="{name:'stockedit-id', params:{id:itemKey}}">{{ item.name }}</NuxtLink>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-plus-circle" v-on:click="moveShoppingList(itemKey)"></i>
        </div>
      </li>
    </ul>

    <!-- 削除ボタン -->
    <button class="el_btn col_white bcol_red mt_30 w_100" type="button" v-if="checkItems.length != 0" v-on:click="deleteCheckItems">{{ checkItems.length }}件削除する</button>

    <!-- 追加ボタン -->
    <NuxtLink class="bl_itemManage_addBtn d_flex al_center ju_center" to="/stockregist" v-else>
      <i class="bl_itemManage_addBtn_icon fas fa-plus-circle"></i>
    </NuxtLink>
  </div>
</template>

<script>
require('date-utils')

export default{
  // コンポーネント呼び出し
  components: {
    Navbar: () => import('~/layouts/navbar')
  },

  data(){
    return {
      stockList:[],
      shoppingList:[],
      checkItems:[],
    }
  },

  methods:{
    // DBから在庫リストを取得
    async getStockList(){
      let userStocke = await this.$stocksGet();
      this.stockList = userStocke.list;
    },
    // DBから買い物リストを取得
    async getShoppingList(){
      let userShopping = await this.$shoppingsGet();
      this.shoppingList = userShopping.list;
    },
    // DBの在庫リストを更新
    async updateStockList(){
      await this.$stocksUpdate(this.stockList);
    },
    // DBの買い物リストを更新
    async updateShoppingList(){
      await this.$shoppingsUpdate(this.shoppingList);
    },
    // 在庫リストからアイテムを買い物リストに追加する
    async moveShoppingList(index){
      this.shoppingList.push(this.stockList[index])
      this.updateShoppingList();
    },
    // 在庫リストからアイテムを削除
    async deleteStockItem(index){
      this.stockList.splice(index, 1);
      this.updateStockList();
    },
    // チェックしているアイテムをまとめて削除
    async deleteCheckItems(){
      for (let index = this.checkItems.length; index > 0; index--) {
        this.deleteStockItem(this.checkItems[index - 1])        
      }
      this.checkItems = [];
    },
    // 消費期限までの日数を取得
    getPeriod(date){
      let toDay     = Date.today();
      let periodDay = new Date(date);
      return toDay.getDaysBetween(periodDay);
    },
  },
  mounted(){
    this.getStockList();
    this.getShoppingList();
  }
    
}
</script>