import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBaseAuth/Firebase";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [User, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    console.log(User)
    // ! email password login and register
    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // ! sign in/up with google
    const createUserWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    // ! logout 
    const hanldeLogout = () => {
        return signOut(auth);
    }


    // ! data object                
    const dataObj = {
        createUserWithEmailPassword,
        loginWithEmailPassword,
        createUserWithGoogle,
        hanldeLogout,
        loading,
        setLoading,
        setUser,
        User,
        darkMode,
        setDarkMode
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={dataObj}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;