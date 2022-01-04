
<style lang="scss">
 @import "layouts/module.scss";
</style>

<template>
<section class="top-card">
    <h1>ログイン</h1>

    <form>
        <input type="text" id="name" name="name" placeholder="名前" >
        <input type="text" id="mail" name="mail" placeholder="メールアドレス" >
        <input v-bind:type="passType" id="pass" name="pass" placeholder="パスワード" >
        <label class="checkbox-inline" >
            マスク解除
            <input type="checkbox" id="passmk" v-model="passHidden" v-bind:value="false"/>
        </label> 
        <input type="submit" id="regist" value="ログイン" formmethod="POST" >
    </form>
    <a href="#ps_reset">パスワードをお忘れの方はこちら</a>

    <v-btn
      @click="SignInGoogle"
    >
      Googleアカウントでログイン
    </v-btn>

</section>
</template>
<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export default {
  methods: {
    SignInGoogle () {
      const provider = new GoogleAuthProvider()

    // 認証済みかどうか判定　戻り値：ture or false
      const auth = getAuth()

      // ログインポップを開く
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$router.push({ path: '/lists' })
        }).catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
