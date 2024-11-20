import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const ContextApi = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if(user){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
            }
        })
    }, [])

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const AuthInfo = {
        createAccount,
        loading,
        user,
        signInGoogle,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;