import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const getStocks = async() => {
  // uidを取得
  let uid = "";
  await new Promise(resolve => {
    onAuthStateChanged(getAuth(), (user) => {
      uid = user.uid;
      resolve();
    })
  })

  // 自分に紐づくアイテムを取得
  const userStocksDoc = doc(getFirestore(), "stocks", uid);
  let item = {};
  await getDoc(userStocksDoc).then((doc) => {
    if (doc.exists()) {
      item = doc.data();
    } else {
      setDoc(userStocksDoc, { list: [] });
      item = { list: [] };
    }
  });
  return item;
}

const updateStocks = async(list) => {
  // uidを取得
  let uid = "";
  await new Promise(resolve => {
    onAuthStateChanged(getAuth(), (user) => {
      uid = user.uid;
      resolve();
    })
  })

  // 自分に紐づくアイテムを更新
  const userStocksDoc = doc(getFirestore(), "stocks", uid);
  setDoc(userStocksDoc, { list: list });
}

export default({}, inject) => {
  inject('stocksGet', getStocks);
  inject('stocksUpdate', updateStocks);
}