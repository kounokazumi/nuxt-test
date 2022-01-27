
<template>
 <body>
    <h1 class="title">Profile</h1>
    <div class="box">
    <p class="text1">ユーザ名</p>
    <input class="name" type="text" name="number">
   
 <br>
    <p class="text2">メールアドレス</p>
    <input class="adoress" type="text" name="number">
    <input class="save" type="submit" value="内容を保存">
   
    </div>
</body>
</template>

<style>
body{
    position: static;
    background-color: #F7F1BB;
}
.title{
    position: relative;
    top: 100px;
    left: 670px;
}
.box{
    position: relative;
    top: 100px;
    left: 450px;
    padding: 0.5em 1em;
    margin: 2em 0;
    width: 35em;
    height: 30em;
    color: width;
    background-color: #ffffff;
    border-top: solid 5px #ffbe00;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.text1{
    position: relative;
    top: 100px;
    left: 120px;
    font-size: 15px;
    color: #a9a9a9;
}
.name{
    position: relative;
    top: 80px;
    left: 120px;
    height: 40px;
    width: 300px;
    padding: 0.5em 1em;
    margin: 2em 0;
    background: #fffde6;
    border: solid 1px #D6D4C7;
}
.text2{
    position: relative;
    top: 120px;
    left: 120px;
    font-size: 15px;
    color: #a9a9a9;
}
.adoress{
    position: relative;
    top: 100px;
    left: 120px;
    height: 40px;
    width: 300px;
    padding: 0.5em 1em;
    margin: 2em 0;
    background: #fffde6;
    border: solid 1px #D6D4C7;
}
.save{
    position: relative;
    top: 230px;
    left: -90px;
    font-size: 15px;
    color: #ffffff;
    height: 40px;
    width: 100px;
    background-color: #f5deb3;
    border: solid 0px;
}
</style>
