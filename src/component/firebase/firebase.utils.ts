import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDjMOHW13jH3v5o1DljfooL589KvNFICqA",
    authDomain: "hustlers-village.firebaseapp.com",
    projectId: "hustlers-village",
    storageBucket: "hustlers-village.appspot.com",
    messagingSenderId: "870515378848",
    appId: "1:870515378848:web:4213277aa36af0bf9657c5",
    measurementId: "G-J7QHYJT98H"
  };

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    'prompt': 'select_account'
  });
export const signInWithGoogle = async()  => 
{   let googlesignin =  await firebase.auth().signInWithPopup(provider)
   
    console.log(googlesignin)
}



export default firebase;

