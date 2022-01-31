import { doc, onSnapshot} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

export const state = () => {
  return {
    profile:{
      userId:'',
      name:'',
    },
  }
}

export const mutations = {
  setProfile: (state, profile) => {
    state.profile = profile; // stateの状態を変更する
  },
}

export const actions = {
  async fetchProfile({ commit }, message) {
    const db        = getFirestore()
    // uidを取得
    let uid = "";
    await new Promise(resolve => {
      onAuthStateChanged(getAuth(), (user) => {
        uid = user.uid;
        resolve();
      })
    })

    onSnapshot(doc(db, "profiles", uid), (doc) => {
      console.log(doc.data());
      commit('setProfile', doc.data())
    });
  }
}
