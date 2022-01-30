import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth";

const getAuthUser = async() => {
  let auth = getAuth();
  let authUser = {};

  const myPromise = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      authUser = user;
      resolve();
    })
  });

  await myPromise;
  
  return authUser;
};

const updateAuthUser = async(user) => {
  const auth = getAuth();

  updateEmail(auth.currentUser, user.email).then(() => {
    // Email updated!
  });
};

export default({}, inject) => {
  inject('getAuthUser', getAuthUser);
  inject('updateAuthUser', updateAuthUser);
}