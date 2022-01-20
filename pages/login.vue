<template>
  <div>
    <h2 class="fs_30 tx_center">ログイン</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <input class="el_input" v-model="email" type="email" placeholder="メールアドレス">
      <input class="el_input" v-model="password" type="password" placeholder="パスワード">
      <button class="el_btn bcol_orange col_white w_100 fs_12" type="button" v-on:click="login">ログイン</button>
      <a class="col_orange w_100 tx_center" href="">パスワードをお忘れの方はこちら</a>
    </form>
  </div>  
</template>

<script>
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export default {
  data(){
    return {
      email:'',
      password:'',
      errorMessage:'',
    }
  },
  methods:{
    login(){
      const auth = this.$fb.auth();
      console.log(this.email, this.password);

      // ユーザーの作成
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.$router.push("/buylist");
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
        });
    },
  },
  mounted(){
    const auth = this.$fb.auth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ログイン済み
        this.$router.push("/buylist");
      } else {
        // 未ログイン
      }
    });
  }
}
</script>