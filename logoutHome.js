import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyANFBgT4vUhe4GpREeXK6cw-4vX9T81LoU",
  authDomain: "data-visualization-80e4d.firebaseapp.com",
  projectId: "data-visualization-80e4d",
  storageBucket: "data-visualization-80e4d.appspot.com",
  messagingSenderId: "436615445680",
  appId: "1:436615445680:web:de1a2420e8e1b9860ecf75"
  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()

const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const message = document.getElementById("message");
const userName = document.getElementById("userName");



onAuthStateChanged(auth, (user) => {
  if(user) {
    
    userName.innerHTML = user.displayName;
    
  } else {
   
    // location.replace("login.html")

  }
})

const userSignOut = async() => {
    signOut(auth).then(() => {
        alert("You have signed out successfully!");
        location.href ="/";

  
    }).catch((error) => {})
  }


// signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);



