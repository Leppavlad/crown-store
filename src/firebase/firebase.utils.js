import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
      // console.error("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc(object.title);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsToMap = (collections) => {
  const transformedCollections = collections.docs.map((collection) => {
    const { title, items } = collection.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: collection.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, item) => {
    accumulator[item.title.toLowerCase()] = item;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      unsubsribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp({
  apiKey: "AIzaSyDg02ymN-ij_BBzK-xYjuUK2TPs9NbnQWQ",
  authDomain: "crwn-store-fc636.firebaseapp.com",
  projectId: "crwn-store-fc636",
  storageBucket: "crwn-store-fc636.appspot.com",
  messagingSenderId: "940913781130",
  appId: "1:940913781130:web:2d1fdb66fb643557890073",
  measurementId: "G-2GXMC614GE",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
