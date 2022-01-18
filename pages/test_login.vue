
<template>
<section class="top-card">
    <h1>ログイン</h1>

    <form @submit.prevent>
        <input type="text" v-model="email" placeholder="メールアドレス" >
        <input type="password" v-model="password" placeholder="パスワード" >
        <input type="submit" id="regist" value="ログイン" v-on:click="login">
    </form>
       
</section>
</template>


<script>
const firebase = require('firebase/app');
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDw2CtQY4S6sfPbBPiMdKQ35TS0ne64og",
  authDomain: "sotuken-test.firebaseapp.com",
  projectId: "sotuken-test",
  storageBucket: "sotuken-test.appspot.com",
  messagingSenderId: "349598854436",
  appId: "1:349598854436:web:1d1b5f82200975efd797b1",
  measurementId: "G-0J6YB1EVW9"
};
export default {
  data(){
   return {
     email:'',
     password: '',
   }
  },
  methods:{
    login(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
       this.$store.dispatch('login', {email: this.email, password: this.password})
      }).cach((error)=>{
         const errorCode = error.code;
          const errorMessage = error.message;
      });
    }
  }
}
</script>
  
