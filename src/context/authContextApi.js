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
  const [logerr,setLogerr] =useState("")

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userData:", userCredential);

        alert("Register Successfully...");
      })
      .catch((err) => {
        console.log("Error in authentication:", err.message);
        setError(err.message);
      });
  }

  function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password).then(userCredential=>{
       console.log("userData:", userCredential);
       alert("Successfully Login...");
    }).catch((err)=>{
          console.log("Error in Login Authentication :",err.message);
          setLogerr(err.message);
    })
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
    <userAuthContext.Provider value={{ user, signUp, error, logIn, logerr }}>
      {children}
    </userAuthContext.Provider>
  );
   
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
