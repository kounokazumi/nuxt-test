import { doc, onSnapshot} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

export const state = () => {
  return {
    list:"",
  }
}

export const mutations = {
  setList: (state, list) => {
    state.list = list; // stateの状態を変更する
  },
}

export const actions = {
  async fetchList({ commit }, message) {
    const db        = getFirestore()
    // uidを取得
    let uid = "";
    await new Promise(resolve => {
      onAuthStateChanged(getAuth(), (user) => {
        uid = user.uid;
        resolve();
      })
    })

    onSnapshot(doc(db, "stocks", uid), (doc) => {
      commit('setList', doc.data().list)
    });
  }
}
