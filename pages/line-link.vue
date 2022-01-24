<template>
  <div>
    <p>テスト</p>
    <p>name:{{ name }}</p>
    <p>userId:{{ userId }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://static.line-scdn.net/liff/edge/2/sdk.js'
        }
      ],
    }
  },
  data(){
    return {
      userId:"",
      name:"",
    }
  },

  mounted(){
     //LIFFで立ち上げているかどうかの判定
    //LIFF初期化
    liff.init({
      liffId: "1656829973-Wg9XXLKp"
    })
    .then(()=>{
      //プロフィール情報の取得
      liff.getProfile()
        .then(profile=>{
          this.userId = profile.userId;
          this.$axios.$post('/server-middleware/userId', {name:"test", userId:profile.userId})
        })
    })
  }
}
</script>