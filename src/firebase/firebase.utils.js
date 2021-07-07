import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDg02ymN-ij_BBzK-xYjuUK2TPs9NbnQWQ",
  authDomain: "crwn-store-fc636.firebaseapp.com",
  projectId: "crwn-store-fc636",
  storageBucket: "crwn-store-fc636.appspot.com",
  messagingSenderId: "940913781130",
  appId: "1:940913781130:web:2d1fdb66fb643557890073",
  measurementId: "G-2GXMC614GE",
};

export const createUserProfileDocument = async (userAuth, addititonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // console.log("UserRef", userRef);
  // console.log("Snapshot", snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const created = new Date();
    try {
      await userRef.set({ displayName, email, created, ...addititonalData });
    } catch (error) {
      throw new Error("Error creating user", error.message);
      // console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
