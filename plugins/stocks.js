import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import axios from 'axios';

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

  let stockListMessage = '';
  list.forEach(item => {
    stockListMessage += `・${item.name}:${item.date}まで\n`;
  });

  // 自分に紐づくアイテムを取得
  const userProfileDoc = doc(getFirestore(), "profiles", uid);
  let user = {};
  await getDoc(userProfileDoc).then((doc) => {
    if (doc.exists()) {
      user = doc.data();
    }
  });

  // LINE BOTに送信
  let token = '7J/cu6HBdesqyiAMtbtGX9a+19MPjaciXuBzucc4CPjSwX+FGUko+eQm056DirlYLdISMFdGG3onhW5ZzHl5KQz7DFmRJRSOrva0t3VyyrZx+GnK7in613oiEmGqQYkOpkK5sDvaEMuK8A7glAlOMgdB04t89/1O/w1cDnyilFU=';
  return {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    params: {
      to: user.userId,
      messages:[
        {
          type:'text',
          text:"在庫の消費期限が近づいてきました！\n"
        },
        {
          type:'text',
          text:stockListMessage
        },
      ],
      notificationDisabled:true
    }
  }
};

export default({}, inject) => {
  inject('stocksGet', getStocks);
  inject('stocksUpdate', updateStocks);
  inject('alertStocks', alertStocks);
}