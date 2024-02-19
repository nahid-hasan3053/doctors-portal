import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        user, loading, createUser, loginUser, updateUser, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;