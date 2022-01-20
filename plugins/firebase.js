import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from '@firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
                            apiKey: "AIzaSyDDw2CtQY4S6sfPbBPiMdKQ35TS0ne64og",
                            authDomain: "sotuken-test.firebaseapp.com",
                            projectId: "sotuken-test",
                            storageBucket: "sotuken-test.appspot.com",
                            messagingSenderId: "349598854436",
                            appId: "1:349598854436:web:1d1b5f82200975efd797b1",
                            measurementId: "G-0J6YB1EVW9"
                          });
}

export default (context, inject) => {

  const $fb = {
    app: firebase.app,
    auth: firebase.auth,
    firestore: getFirestore(),
    // storage:Firebase.storage,
  }
  // const $storageUrl = 'https://storage.googleapis.com/nuxt-app-f5b1a.appspot.com/'
  // どこからでも「this.$fb」で呼び出せる
  inject('fb', $fb)
}
