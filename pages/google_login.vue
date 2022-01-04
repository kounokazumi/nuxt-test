
<template>
  <div>
    <v-btn
      @click="SignInGoogle"
    >
      Googleアカウントでログイン
    </v-btn>
  </div>
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
