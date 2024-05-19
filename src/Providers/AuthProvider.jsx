import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import React from 'react';
import axios from "axios";
export const AuthContext = createContext(null);


const provider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
          
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        signInWithPopup(auth, provider)
    }
    const signInWithGithub = () =>{
        setLoading(true);
        signInWithPopup(auth, provider)
    }
    

        // const logOut = () =>{
        //     setLoading(true);
        //   return signOut(auth);

        // }

        const logOut = async () => {
            setLoading(true)
            const { data } = await axios('http://localhost:5000/logout', {
              withCredentials: true,
            })
            console.log(data)
            return signOut(auth)
          }

    // observe auth state change

    useEffect(() =>{
      const unSubscribe = onAuthStateChanged (auth, currentUser =>{
            // console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])



    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        logOut,
        signInWithGoogle,
        signInWithGithub

    }
    return (
        // <div>
            
        // </div>
        
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;