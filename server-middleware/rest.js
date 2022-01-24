const bodyParser = require('body-parser')
const app = require('express')()
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore } from '@firebase/firestore';

firebase.initializeApp({
                          apiKey: "AIzaSyDDw2CtQY4S6sfPbBPiMdKQ35TS0ne64og",
                          authDomain: "sotuken-test.firebaseapp.com",
                          projectId: "sotuken-test",
                          storageBucket: "sotuken-test.appspot.com",
                          messagingSenderId: "349598854436",
                          appId: "1:349598854436:web:1d1b5f82200975efd797b1",
                          measurementId: "G-0J6YB1EVW9"
                        });

app.use(bodyParser.json())
app.post('/userId', (req, res) => {
  // 自分に紐づくアイテムを更新
  const userProfileDoc = doc(getFirestore(), "profiles", 'XNY4X4HNapMoPCtjNzbphBsZk8U2');
  setDoc(userProfileDoc, { name: req.body.name, userId:req.body.userId });
})

module.exports = app