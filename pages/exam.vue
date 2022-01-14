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
/* body{
    position: sticky;
    background-color: #F7F1BB;
}

.example {
  height: 2px;
  position: relative;
  top: 20px;
}
.example::before {
  content: "";
  background-image: linear-gradient(to right, #707070, #707070 10px, transparent 3px, transparent 8px);
  background-size: 20px 1px;
  background-repeat: repeat-x;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.box{
    position: relative;
    top: 0px;
    left: 245px;
    padding: 0.5em 1em;
    margin: 2em 0;
    width: 35%;
    height: 30em;
    color: width;
    background-color: #ffffff;
    border-top: solid 5px #ffbe00;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}

.check{
  background-color: #c3c3c3;
}


#buttonImage {
  background-image:url('/gomi.svg');
  display:inline-block;
  margin-top:2px;
  width:16px;
  height:16px;
}

.flatbutton{
  position:absolute;
  border:1px solid #ffffff;
  background-color:#ffffff;
  width:60px;
  height:40px;
  right:10%;
}

.form{
    position: relative;
    top: 200px;
    left: 55%;
    height: 45px;
    width: 300px;
    padding: 0.5em 1em;
    margin: 2em 0;
    background: #ffffff;
    border: solid 1px #aaaaaa;
    border-radius: 10px;
    }

    .save{
    position: relative;
    top: 270px;
    left: 35%;
    font-size: 15px;
    color: #ffffff;
    height: 40px;
    width: 300px;
    background-color: #f1d091;
    border: solid 0px;
} */
</style>
