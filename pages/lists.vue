<template>
<!-- ログアウト処理（仮）-->
  <div>
    <v-btn @click="signout">
    signout
    </v-btn>
  </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  methods: {
    signout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        alert('サインアウトしました。')
      }).catch((error) => {
        // An error happened.
        console.error(error)
      })
    }
  }
}
</script>