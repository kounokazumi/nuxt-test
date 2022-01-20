<template>
  <div>
    <h2 class="fs_30 tx_center">在庫を編集</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <input class="el_input" type="text" v-model="name" placeholder="名前">
      <input class="el_input" type="date" v-model="date" placeholder="日付">
      <button class="el_btn bcol_green col_white w_100 fs_12" type="button" v-on:click="update">保存</button>
    </form>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      itemId:-1,
      name:'',
      date:'',
      stockList:[],
    }
  },
  methods:{
    // アイテムを登録
    async update(){
      this.stockList[this.itemId].name = this.name;
      this.stockList[this.itemId].date = this.date;
      this.updateStockList();
      this.$router.push("/stocklist");
    },
    // DBから買い物リストを取得
    async getShopingList(){
      let userStock = await this.$stocksGet();
      this.stockList = userStock.list;
      this.name = this.stockList[this.itemId].name;
      this.date = this.stockList[this.itemId].date;
    },
    // DBの買い物リストを更新
    async updateStockList(){
      await this.$stocksUpdate(this.stockList);
    },
  },
  mounted(){
    this.getShopingList();
    this.itemId = this.$route.params.id;
  }
}
</script>