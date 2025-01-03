import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.init';
import axios from 'axios';
import { TbRuler3 } from 'react-icons/tb';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const  createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  


  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOutUser = (() => {
    setLoading(true)
    return signOut(auth);
  })


  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('state captured',  currentUser?.email)
        if(currentUser?.email) {
          const user = { email: currentUser.email}
          axios.post('https://job-portal-server-blush.vercel.app/jwt', user, {withCredentials: true})
          .then(res => {console.log(res.data);
            setLoading(false);

          })
        }
        else {
          axios.post('https://job-portal-server-blush.vercel.app/logout', {}, {withCredentials:TbRuler3} )
          .then(res => {
            console.log('logout', res.data);
            setLoading(false);
          })
        }

        
       
    }
    
    )
    return () => {
        unsubscribe();

    }
  }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOutUser,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;