import {  signOut as signOutFirebase } from "firebase/auth";
import { auth } from ".";

export const signOut = () => {
    signOutFirebase(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
}