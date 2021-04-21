import firebase from "firebase/"

const firebaseConfig = {
  apiKey: "AIzaSyAmAdtI0ja8auF3q_XJ43KXgkvhgwES8m0",
  authDomain: "disneyplus-clone-fa249.firebaseapp.com",
  projectId: "disneyplus-clone-fa249",
  storageBucket: "disneyplus-clone-fa249.appspot.com",
  messagingSenderId: "35288708018",
  appId: "1:35288708018:web:ada91f42a46a7eba982aab",
  measurementId: "G-YEPK2CTGTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;