import React, { Children, createContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const ContextApi = ({children}) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        createAccount
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;