<template>
  <div class="bl_exam">
    <!-- ナビバー -->
    <Navbar/>

    <div class="bl_exam_main">
      <div class="bl_box">
        <ul>
          <li>
            <input class="check" type="checkbox"  name="scales" checked>リスト
            <button class="flatbutton" >
              <i class="fas fa-trash"></i>
            </button>
          </li>
          <li>
            <input class="check" type="checkbox"  name="scales" checked>リスト
            <button class="flatbutton">
              <i class="fas fa-trash"></i>
            </button>
          </li>
        </ul>
      </div>

      <form class="bl_box" action="">
        <input class="form" type="text" name="number" placeholder="リスト名">
        <button class="save" type="submit">追加</button>
      </form>

    </div>
    

  </div>

</template>

<script>
  export default{
    // コンポーネント呼び出し
    components: {
      Navbar: () => import('~/layouts/navbar')
    },

    data(){
      return{
        isActive: "1"
      }
    },
    methods: {
    isSelect: function (num) {
      this.isActive = num;
    }
  }
    
}
</script>

<style>
</style>
