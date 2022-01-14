<template>
<body>
<div id="tab">
  <ul class="tabMenu">
    <li class="button1" v-on:click="isSelect('1')">買い物リスト</li>
    <li class="button1" v-on:click="isSelect('2')">在庫リスト</li>
  </ul>
</div>

<div class="box">
  <div class="list2">
    <ul>
      <li>
        <input class="check" type="checkbox"  name="scales" checked>リスト
        <button class="flatbutton" ><span id="buttonImage"></span></button>
      </li>
      <li>
        <input class="check" type="checkbox"  name="scales" checked>リスト
        <button class="flatbutton">
          <span id="buttonImage"></span>
        </button>
      </li>
    </ul>
  </div>
</div>
</body>
</template>

<script>
    export default{
    el: "#tab",
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
body{
    position: static;
    background-color: #F7F1BB;
}
.tabMenu{
  position: relative;

}
.button1 {
  display: inline-block;
  font-size: 10px;
  color: #000000;
}

body {
  padding: 10px 5%;
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
    top: 100px;
    left: 245px;
    padding: 0.5em 1em;
    margin: 2em 0;
    width: 40%;
    height: 40em;
    color: width;
    background-color: #ffffff;
    border-top: solid 5px #ffbe00;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}


.list2 ul {
  padding: 0.3em 0.5em;
  position: relative;
  color: #000000;
  list-style-type: none;
  font-weight:700;
  color: #424242;
}
.list2 ol {
  counter-reset: number;
}
.list2 ul li{
  line-height: 2.0;
  padding: 0.5em 0 0.5em 1.4em;
  border-bottom: dashed 1px #8a8a8a;
  width: 500px;
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
  right:45%;
}
</style>
