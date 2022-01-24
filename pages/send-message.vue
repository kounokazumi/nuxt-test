<template>
  <div>
    <p>テスト</p>
    <input type="text" v-model="message" name="" id="">
    <button type="button" v-on:click="sendMessage">送信</button>
  </div>
</template>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data(){
    return {
      userId:"",
      message:"",
    }
  },
  methods:{
    async sendMessage(){
      // uidを取得
      let uid = "";
      await new Promise(resolve => {
        onAuthStateChanged(getAuth(), (user) => {
          uid = user.uid;
          resolve();
        })
      })
      const res = await this.$axios.$post('/server-middleware/userId', {uid: uid, name:this.message, userId:this.message})
      console.log(res);
    },
  },
  mounted(){
    let profile = this.$profilesGet();
    this.userId = profile.userId;
  }
}
</script>