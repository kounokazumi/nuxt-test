<style lang="scss">
 @import "layouts/module.scss";
</style>

<template>
  <section class="container">
      <div class="login-card">
        <h1>ログイン</h1>
        <form>
          <input type="text" id="mail" name="mail" placeholder="メールアドレス" >
          <input v-bind:type="passType" id="pass" name="pass" placeholder="パスワード" >
          <label class="checkbox-inline" >
            マスク解除
            <input type="checkbox" v-model="passHidden" v-bind:value="false"/>
          </label> 
          
          <input type="submit" id="login" value="ログイン" formmethod="POST" >
       
            <a href="#" id="fg_ps">パスワードをお忘れの方はこちら</a>
            <div class="new_acounts">
              <p>アカウントをお持ちではありませんか？</p>
              <router-link to="new_acount">新規会員登録</router-link>
            </div>
         </form> 
         

      </div>
  </section>
</template>
<script src="assets/module.js">
</script>