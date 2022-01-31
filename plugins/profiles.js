import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const getProfile = async() => {
  // uidを取得
  let uid = "";
  await new Promise(resolve => {
    onAuthStateChanged(getAuth(), (user) => {
      uid = user.uid;
      resolve();
    })
  })

  // 自分に紐づくアイテムを取得
  const userProfileDoc = doc(getFirestore(), "profiles", uid);
  let item = {};
  await getDoc(userProfileDoc).then((doc) => {
    if (doc.exists()) {
      item = doc.data();
    } else {
      setDoc(userProfileDoc, { name: "", userId:"" });
      item = { name: "", userId: "" };
    }
  });
  return item;
}

const updateProfile = async(profile) => {
  // uidを取得
  let uid = "";

  try {
    await new Promise(resolve => {
      onAuthStateChanged(getAuth(), (user) => {
        uid = user.uid;
        resolve();
      })
    })
  
  
    // 自分に紐づくアイテムを更新
    const userProfileDoc = doc(getFirestore(), "profiles", uid);
    setDoc(userProfileDoc, { name: profile.name, userId:profile.userId });
    
  } catch (error) {
    return error.message;
  }


}

export default({}, inject) => {
  inject('profilesGet', getProfile);
  inject('profilesUpdate', updateProfile);
}