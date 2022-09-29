// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFqruIX08RSYDKBnszkAh_3IV42PY6ZsM",
  authDomain: "quoraclone-d02a9.firebaseapp.com",
  projectId: "quoraclone-d02a9",
  storageBucket: "quoraclone-d02a9.appspot.com",
  messagingSenderId: "871058119905",
  appId: "1:871058119905:web:b189dbdc289c07c54d2ba0",
  measurementId: "G-77QLGJ166L"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig ) 

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db