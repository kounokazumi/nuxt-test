<script>
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDw2CtQY4S6sfPbBPiMdKQ35TS0ne64og",
  authDomain: "sotuken-test.firebaseapp.com",
  projectId: "sotuken-test",
  storageBucket: "sotuken-test.appspot.com",
  messagingSenderId: "349598854436",
  appId: "1:349598854436:web:1d1b5f82200975efd797b1",
  measurementId: "G-0J6YB1EVW9"
};
firebase.initializeApp(config);

export default{
    methods:{
        con(){
        var db=firebase.database();

        db.ref('test1').set("hoge");

        db.ref('test2').set({
            "fuga1":"fuga",
            "fuga2":"fugafuga"
            })
        }
    }
}

</script>
