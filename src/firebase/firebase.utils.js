import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBYVeUPRdEHUGcsCNh3r6MLooyBn1dEBRw",
    authDomain: "crown-clothing-3-527f8.firebaseapp.com",
    projectId: "crown-clothing-3-527f8",
    storageBucket: "crown-clothing-3-527f8.appspot.com",
    messagingSenderId: "706787147263",
    appId: "1:706787147263:web:d8c43a84f1421f37fc7bca",
    measurementId: "G-BCMGH3FREV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
