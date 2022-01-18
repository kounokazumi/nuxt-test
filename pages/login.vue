<template>
<section class="login_bl w_60 mx_auto">
    <h1 class="login_bl_title mt_20 mb_10 tx_center" >ログイン</h1>

    <form class="form_card mt_10">
        <input class="form_card_input w_100 mb_10" type="text" id="name" name="name" placeholder="名前" >
        <input class="form_card_input w_100 mb_10" type="text" id="mail" name="mail" placeholder="メールアドレス" >
        <input class="form_card_input w_100 mb_10" v-bind:type="passType" id="pass" name="pass" placeholder="パスワード" >
        <label class="form_card_msk" >
            マスク解除
            <input class=" mb_10 w_100 w_2" type="checkbox" id="passmk" v-model="passHidden" v-bind:value="false"/>
        </label> 
        <input class="form_card_regist mb_10 w_100 mt_10 pt_10 pb_10" type="submit" id="regist" value="ログイン" formmethod="POST" >
    </form>
    <a class="login_bl_link" href="#ps_reset">パスワードをお忘れの方はこちら</a>
    <p class="login_bl_period">  または </p>
    <div class="login_bl_google_btn tx_center pt_10 pb_10 mx_auto">
      <v-btn
      v-on:click="SignInGoogle"
    >
      Googleアカウントでログイン
    </v-btn>
  </div>


</section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export default {
     watchQuery: ['page'],
    // 変数（パスワードマスク）
    data(){
      return{
        passHidden:true,
      }
    },
    // 呼び出し先の値が変われば、キャッシュしてくれる。
    // 動的に変わる変数などで使う。
    computed: {
      count () { return this.$store.state.counter.count },
      passType(){
        return this.passHidden ? 'password' : 'text';
      }
    },
    // 値が変わったときに処理を実行する
    watch:{
      passHidden(){
      }
    },

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
