import React from "react";
import "../styles/Header.css";
import { db } from "../firebase";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Header = () => {
  const signIn = async () => {
    // TODO 1: Sign in Firebase with credential from the Google user.
    var provider = new GoogleAuthProvider();
    console.log("sigin");
    await signInWithPopup(getAuth(), provider);
  };
  // Signs-out of Friendly Chat.
  function signOutUser() {
    signOut(getAuth());
  }

  // Initiate firebase auth
  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  // Returns the signed-in user's profile Pic URL.
  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
  }

  // Returns the signed-in user's display name.
  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  // Returns true if a user is signed-in.
  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }
  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  function authStateObserver(user) {
    if (user) {
      // User is signed in!
      // Get the signed-in user's profile pic and name.
      var profilePicUrl = getProfilePicUrl();
      var userName = getUserName();
    } else {
      // User is signed out!
      // Hide user's profile and sign-out button.
    }
  }
  initFirebaseAuth();
  return (
    <div className="header">
      <div className="header-title">Create CV</div>
      <div className="signin">
        <button
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
