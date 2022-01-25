import { getAuth, onAuthStateChanged } from "firebase/auth";

const getAuthUser = async() => {
  const auth = getAuth();
  return auth.currentUser;
};

const updateAuthUser = async(user) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: user.displayName, photoURL: user.photoURL
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });

  updateEmail(auth.currentUser, user.email).then(() => {
    // Email updated!
  });
};

export default({}, inject) => {
  inject('getAuthUser', getAuthUser);
  inject('updateAuthUser', updateAuthUser);
}