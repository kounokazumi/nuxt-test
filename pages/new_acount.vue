<style lang="scss">
 @import "layouts/module.scss";
</style>

<template>
<section class="container">
      <div class="new-acount_card">
        <p>新規会員登録</p>
        <form>
          <input type="text" id="name" name="name" placeholder="名前" >
          <input type="text" id="mail" name="mail" placeholder="メールアドレス" >
          <input v-bind:type="passType" id="pass" name="pass" placeholder="パスワード" >
          <label class="checkbox-inline" >
            マスク解除
            <input type="checkbox" id="passmk" v-model="passHidden" v-bind:value="false"/>
          </label> 
          
          <input type="submit" id="regist" value="登録" formmethod="POST" >
          
          
          <!-- まだできない -->
          <a>
            <router-link to="" id="cancel">キャンセル</router-link>
          </a>
         </form> 
         

      </div>
  </section>
</template>
<script src="assets/module.js">
</script>