import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('user in the use state changed');
      setUser(currentUser);
      setLoading(false)
    })
    return () =>{
    return unSubscribe();
    } 
      
  }, [])

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }

  const userInfo = {user, loading, createUser, signInUser, logOut, googleLogin}
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;