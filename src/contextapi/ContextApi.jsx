import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const ContextApi = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            // console.log(user);
        })
        return () => unsubscribe()
    }, [])

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    const AuthInfo = {
        createAccount,
        loading,
        user,
        signInGoogle,
        login,
        profileUpdate,
        logout,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;