// import firebase from'firebase/app';
// import "firebase/auth";
// import "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAcgg0HpWbC8pKb7l0vIjfN66mcWY_vlXo",
//   authDomain: "slack-clone-8e0fb.firebaseapp.com",
//   databaseURL: "https://slack-clone-8e0fb.firebaseio.com",
//   projectId: "slack-clone-8e0fb",
//   storageBucket: "slack-clone-8e0fb.appspot.com",
//   messagingSenderId: "1034059270673",
//   appId: "1:1034059270673:web:826d833a05901b356c3fb0",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const auth=firebase .auth();
// export const firestore = firebase.firestore();


// export const signInWithGoogle=()=>{
//          const googleProvider=new firebase.auth.GoogleAuthProvider()
//          auth.signInWithPopup(googleProvider);
// }
// export const createOrGetUserProfileDocument=async(user)=> {
// if(!user)
// return;
// const userRef=firestore.doc(`users/${user.uid}`);
// const snapshot=userRef.get();
// if(!snapshot.exists){
//   const {displayName,email,photoURL}=user;
//   try{
// const user={
//   display_name:displayName,
//   email,
//   photo_url:photoURL,
//   created_at:new Date()
// }
// await userRef.set({})
//   }
//   catch(err){
// console.log("errorrrrr",err)
//   }
// }
// return getUserDocument(user.uid);
// }
// async function getUserDocument(uid){
// if(!uid){
//   return null;

// }
// }
import firebase from "firebase/app";
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

// Auth stuff
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

// Firestore stuff
export const firestore = firebase.firestore();
window.firestore = firestore;

export const createOrGetUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // check if a the user doc is there in DB with
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  // if no user exists in DB @ path 'userRef' then go and make one
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    const createdAt = new Date();

    try {
      await userRef.set({
        display_name: displayName || additionalData.displayName,
        email,
        photo_url: photoURL
          ? photoURL
          : "https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72",
        created_at: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("users").doc(uid);
    return userDocument;
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};
