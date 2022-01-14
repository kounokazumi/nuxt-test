import firebase from '~/plugins/firebase'

export const state = () => ({
 user: {
   uid: '',
   email: '',
    // ログイン状態の真偽値を追加
   login: false,
 },
})

export const getters = {
 user: state => {
   return state.user
 }
}

export const actions = {
 login({ commit }, payload) {
   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
     .then(user => {
         console.log('成功！')
         firebase.auth().onAuthStateChanged(function (user) {
           if (user) {
             commit('getData', { uid: user.uid, email: user.email })
             // ユーザー情報の取得と同時にcommitで真偽値の切り替え
             commit('switchLogin')
           }
         })
       }).catch((error) => {
         alert(error)
       })
 },
}

export const mutations = {
 getData (state, payload) {
   state.user.uid = payload.uid
   state.user.email = payload.email
 },
 // 真偽値を切り替えるmutationsを追加
 switchLogin (state) {
   state.user.login = true
 },
}
