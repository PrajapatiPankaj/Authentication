import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../components/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // User successfully signed up
        
      }
    ).catch((err)=>{
        console.log("Error in authentication:",err.message)
        setError(err.message)
    });
  }

  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, error }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
