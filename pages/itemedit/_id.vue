<template>
  <div>
    <h2 class="fs_30 tx_center">買うものを編集</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <input class="el_input" type="text" name="" id="" placeholder="名前">
      <button class="el_btn bcol_orange col_white w_100 fs_12">保存</button>
      <button class="el_btn bcol_red col_white w_100 fs_12">削除</button>
    </form>
  </div>  
</template>
<script>
export default {
  data(){
    return{
      name:'',
    }
  },
  methods:{
    save(){
      console.log(this.name);
    }
  }
}
</script>