<template>
  <div>
    <h2 class="fs_30 tx_center">在庫を追加</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <input class="el_input" v-model="name" type="text" placeholder="名前">
      <input class="el_input" v-model="date" type="date" placeholder="いつまで">
      <button class="el_btn bcol_orange col_white w_100 fs_12" type="button" v-on:click="regist">登録</button>
    </form>
  </div>  
</template>
<script>
export default {
  data(){
    return{
      name:'',
      date:'',
      stockList:[],
    }
  },
  methods:{
    // アイテムを登録
    async regist(){
      this.stockList.push({name:this.name,date:this.date});
      this.updateStockList();
      this.$store.dispatch('flashMessage/showFlashMessage', '登録完了しました');
      this.$router.push("/stocklist");
    },
    // DBから買い物リストを取得
    async getStockList(){
      let userStockList = await this.$stocksGet();
      this.stockList = userStockList.list;
    },
    // DBの買い物リストを更新
    async updateStockList(){
      await this.$stocksUpdate(this.stockList);
    },
  },
  mounted(){
    this.getStockList();
  }
}
</script>