import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import axios from 'axios';
require('date-utils')

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

const alertStocks = async() => {
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
  let list = [];
  await getDoc(userStocksDoc).then((doc) => {
    if (doc.exists()) {
      list = doc.data().list;
    }
  });

  let alertStockList = [];
  let toDay          = Date.today();
  for (let index = 0; index < list.length; index++) {
    let item      = list[index];
    if (!item.date) {
      continue;
    }
    let periodDay = new Date(item.date);
    let period    = toDay.getDaysBetween(periodDay)

    // まだ通知してなくて、期限まで後５日のアイテムを通知する
    if (item.isSend == false && period <= 5) {    
      alertStockList.push(item);
      list[index].isSend = true;
    }
  }

  // 送信済みリストを更新
  updateStocks(list);

  return alertStockList;
};

export default({}, inject) => {
  inject('stocksGet', getStocks);
  inject('stocksUpdate', updateStocks);
  inject('alertStocks', alertStocks);
}