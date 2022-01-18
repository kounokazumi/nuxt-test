
<template>
<section class="top-card">
    <h1>新規アカウント登録</h1>

    <form @submit.prevent>
        <input type="text" v-model="email" placeholder="メールアドレス" >
        <input type="password" v-model="password" placeholder="パスワード" >
        <input type="submit" id="regist" value="ログイン" v-on:click="newAcount">
        
    </form>
</section>
</template>


<script>
const firebase = require('firebase/app');
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
    newAcount(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
       const user = userCredential.user;
      });
    },
  }
}
</script>
  
