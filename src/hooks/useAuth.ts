"use client";
import { app } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setAuth] = useState<boolean | undefined>(undefined);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      setAuth(true);
      // ...
    } else {
      // User is signed out
      // ...
      setAuth(false);
    }
  });

  return { isAuth };
};
