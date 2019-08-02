import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDa8GIghbPqMn8LHt864W7CCsPFSIeLi54",
    authDomain: "crwn-dbs.firebaseapp.com",
    databaseURL: "https://crwn-dbs.firebaseio.com",
    projectId: "crwn-dbs",
    storageBucket: "",
    messagingSenderId: "477185452899",
    appId: "1:477185452899:web:81afb14cae3b62c0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;