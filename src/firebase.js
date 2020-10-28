import firebase from'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAcgg0HpWbC8pKb7l0vIjfN66mcWY_vlXo",
  authDomain: "slack-clone-8e0fb.firebaseapp.com",
  databaseURL: "https://slack-clone-8e0fb.firebaseio.com",
  projectId: "slack-clone-8e0fb",
  storageBucket: "slack-clone-8e0fb.appspot.com",
  messagingSenderId: "1034059270673",
  appId: "1:1034059270673:web:826d833a05901b356c3fb0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase .auth();
export const signInWithGoogle=()=>{
         const googleProvider=new firebase.auth.GoogleAuthProvider()
         auth.signInWithPopup(googleProvider);
}
export function createOrGetUserProfileDocument() {
  
}
