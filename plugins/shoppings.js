import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const getShoppings = async() => {
  // uidを取得
  let uid = "";
  await new Promise(resolve => {
    onAuthStateChanged(getAuth(), (user) => {
      uid = user.uid;
      resolve();
    })
  })

  // 自分に紐づくアイテムを取得
  const userShoppingsDoc = doc(getFirestore(), "shoppings", uid);
  let item = {};
  await getDoc(userShoppingsDoc).then((doc) => {
    if (doc.exists()) {
      item = doc.data();
    } else {
      setDoc(userShoppingsDoc, { list: [] });
      item = { list: [] };
    }
  });
  return item;
}

const updateShoppings = async(list) => {
  // uidを取得
  let uid = "";
  await new Promise(resolve => {
    onAuthStateChanged(getAuth(), (user) => {
      uid = user.uid;
      resolve();
    })
  })

  // 自分に紐づくアイテムを更新
  const userShoppingsDoc = doc(getFirestore(), "shoppings", uid);
  setDoc(userShoppingsDoc, { list: list });
}

export default({}, inject) => {
  inject('shoppingsGet', getShoppings);
  inject('shoppingsUpdate', updateShoppings);
}