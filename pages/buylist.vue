<template>
  <div class="bl_itemManage">
    <Navbar/>

    
    <p class="tx_center" v-if="shoppingList.length == 0">買うものが登録されていません</p>

    <ul class="bl_itemManage_list d_grid gap_25 mt_30" v-else>
      <li class="bl_itemManage_list_item d_grid al_center gap_15" v-for="(item, itemKey) in shoppingList" v-bind:key="itemKey">
        <input class="bl_itemManage_list_item_check" v-model="checkItems" v-bind:value="itemKey" type="checkbox" name="" id="">
        <NuxtLink class="bl_itemManage_list_item_name" v-bind:to="{name:'itemedit-id', params:{id:itemKey}}">{{ item.name }}</NuxtLink>
        <div class="bl_itemManage_list_item_icons d_grid gap_5">
          <i class="bl_itemManage_list_item_icons_success fas fa-circle"></i>
          <i class="bl_itemManage_list_item_icons_error fas fa-minus-circle" v-on:click="deleteShoppingItem(itemKey)"></i>
        </div>
      </li>
    </ul>

    <!-- 削除ボタン -->
    <button class="el_btn col_white bcol_red mt_30 w_100" type="button" v-if="checkItems.length != 0" v-on:click="showModal">{{ checkItems.length }}件削除する</button>

    <!-- 追加ボタン -->
    <NuxtLink class="bl_itemManage_addBtn d_flex al_center ju_center" to="/itemregist" v-else>
      <i class="bl_itemManage_addBtn_icon fas fa-plus-circle"></i>
    </NuxtLink>

    <b-modal id="modal-1" title="削除の確認" hide-footer>
      <p class="mt_15">選択しているアイテムを削除します。</p>
      <p class="mt_5">よろしいでしょうか？</p>
      <div class="d_flex mt_30 gap_15">
        <button class="el_btn bcol_red col_white" type="button" v-on:click="deleteCheckItems">削除</button>
        <button class="el_btn bcol_gray col_white" type="button" v-on:click="hideModal">キャンセル</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default{
  // コンポーネント呼び出し
  components: {
    Navbar: () => import('~/layouts/navbar')
  },

  data(){
    return {
      checkItems:[],
    }
  },
  computed:{
    shoppingList() {
      return this.$store.state.shoppingList.list
    },
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
    },
    // チェックしているアイテムをまとめて削除
    async deleteCheckItems(){
      for (let index = this.checkItems.length; index > 0; index--) {
        this.deleteShoppingItem(this.checkItems[index - 1])        
      }
      this.checkItems = [];
      this.$bvModal.hide('modal-1')
      this.$store.dispatch('flashMessage/showFlashMessage', '削除が完了しました！');
    },
    // 確認モーダルを表示
    async showModal(){
      this.$bvModal.show('modal-1')
    },
    // 確認モーダルを閉じる
    async hideModal(){
      this.$bvModal.hide('modal-1')
    },
  },
  mounted(){
    onAuthStateChanged(getAuth(), (user) => {
      this.$store.dispatch('shoppingList/fetchList')
    });
  },
    
}
</script>