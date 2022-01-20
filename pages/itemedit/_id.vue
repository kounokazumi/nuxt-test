<template>
  <div>
    <h2 class="fs_30 tx_center">買うものを編集</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <input class="el_input" type="text" v-model="name" name="" id="" placeholder="名前">
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
      shoppingList:[],
    }
  },
  methods:{
    // アイテムを登録
    async update(){
      this.shoppingList[this.itemId].name = this.name;
      this.updateShoppingList();
      this.$router.push("/buylist");
    },
    // DBから買い物リストを取得
    async getShopingList(){
      let userShopping = await this.$shoppingsGet();
      this.shoppingList = userShopping.list;
      this.name = this.shoppingList[this.itemId].name;
    },
    // DBの買い物リストを更新
    async updateShoppingList(){
      await this.$shoppingsUpdate(this.shoppingList);
    },
  },
  mounted(){
    this.getShopingList();
    this.itemId = this.$route.params.id;
  }
}
</script>