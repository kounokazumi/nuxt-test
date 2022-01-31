<template>
  <div>
    <h2 class="fs_30 tx_center">買うものを追加</h2>
    <div class="mt_100 d_grid gap_30" action="">
      <input class="el_input" type="text" v-model="name" name="" id="" placeholder="名前">
      <button class="el_btn bcol_orange col_white w_100 fs_12" v-on:click="regist" type="button">登録</button>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      name:'',
      shoppingList:[],
    }
  },
  methods:{
    // アイテムを登録
    async regist(){
      this.shoppingList.push({name:this.name});
      this.updateShoppingList();
      this.$store.dispatch('flashMessage/showFlashMessage', '登録完了しました');
      this.$router.push("/buylist");
    },
    // DBから買い物リストを取得
    async getShopingList(){
      let userShopping = await this.$shoppingsGet();
      this.shoppingList = userShopping.list;
    },
    // DBの買い物リストを更新
    async updateShoppingList(){
      await this.$shoppingsUpdate(this.shoppingList);
    },
  },
  mounted(){
    this.getShopingList();
  }
}
</script>