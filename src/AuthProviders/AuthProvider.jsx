import React, { createContext, useContext, useEffect, useState } from 'react';
// import auth from '../FireBase/FireBase.init';
import { auth } from "../FireBase/FireBase.init"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
const provider = new GoogleAuthProvider();

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            if (currenUser) {
                setUser(currenUser); // Set the current user if signed in
            } else {
                setUser(null); // Set as null if the user is signed out
            }
        });

        // Cleanup listener on component unmount
        return () => unsubscribe();
    }, []);



    const contextInfo = {
        user,
        setUser,
        signUpUser,
        logInUser,
        logOutUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
