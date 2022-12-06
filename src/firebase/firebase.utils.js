// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD0NV_GsVKVnKEpByUyG67cOaK11RbtJYI",
  authDomain: "clothing-db-db5a3.firebaseapp.com",
  databaseURL: "https://clothing-db-db5a3.firebaseio.com",
  projectId: "clothing-db-db5a3",
  storageBucket: "clothing-db-db5a3.appspot.com",
  messagingSenderId: "152879594956",
  appId: "1:152879594956:web:ffda91627dd5892407b169",
  measurementId: "G-NKQFFMYLC5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
