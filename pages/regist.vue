<template>
  <div>
    <h2 class="fs_30 tx_center">新規会員登録</h2>
    <form class="mt_100 d_grid gap_30" action="">
      <input class="el_input" v-model="name" type="text" placeholder="名前" autocomplete="username">
      <input class="el_input" v-model="email" type="email" placeholder="メールアドレス" autocomplete="email">
      <input class="el_input" v-model="password" type="password" placeholder="パスワード" autocomplete="new-password">
      <button class="el_btn bcol_orange col_white w_100 fs_12" type="button" v-on:click="regist">登録</button>
    </form>
  </div>  
</template>

<script>
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
export default {
  data(){
    return {
      name:'',
      email:'',
      password:'',
      userid:'',
    }
  },
  methods:{
    regist(){
      const auth = this.$fb.auth();

      // ユーザーの作成
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.push("/buylist");
           this.$profilesUpdate({
               name:this.name,
               userId:this.userid
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
        
    },
  },
  mounted(){
    const auth = this.$fb.auth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ログイン済み
        this.$store.dispatch('flashMessage/showFlashMessage', 'ようこそ');
        this.$router.push("/buylist");

      } else {
        // 未ログイン
      }
    });
  }
}
</script>