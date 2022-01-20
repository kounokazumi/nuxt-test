<template>
  <div class="bl_itemManage">
    <Navbar/>

    <p class="tx_center" v-if="stockList.length == 0">在庫が登録されていません</p>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30" v-else>
      <li class="bl_itemManage_list_item d_grid al_center gap_15 p_rel" v-for="(item, itemKey) in stockList" v-bind:key="itemKey">
        <input class="bl_itemManage_list_item_check" type="checkbox" name="" id="">
        <span class="bl_itemManage_list_item_status col_theme" v-bind:class="'period_' + Math.floor(getPeriod(item.date) / 5)">あと{{ getPeriod(item.date) }}日</span>
        <NuxtLink class="bl_itemManage_list_item_name" v-bind:to="{name:'stockedit-id', params:{id:itemKey}}">{{ item.name }}</NuxtLink>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-plus-circle"></i>
        </div>
      </li>
    </ul>

    <NuxtLink class="bl_itemManage_addBtn d_flex al_center ju_center" to="/stockregist">
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
    }
  },

  methods:{
    // DBから買い物リストを取得
    async getStockList(){
      let userStocke = await this.$stocksGet();
      this.stockList = userStocke.list;
    },
    // DBの買い物リストを更新
    async updateStockList(){
      await this.$stocksUpdate(this.stockList);
    },
    // 買い物リストからアイテムを削除
    async deleteShoppingItem(index){
      this.stockList.splice(index,1);
      this.updateStockList();
    },
    getPeriod(date){
      let toDay     = Date.today();
      let periodDay = new Date(date);
      return toDay.getDaysBetween(periodDay);
    }
  },
  mounted(){
    this.getStockList();
  }
    
}
</script>