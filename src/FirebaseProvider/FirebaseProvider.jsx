
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hook/useAxiosPublic";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()
// console.log(loading)
    // social Auth providers
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider();

    // console.log(user)
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUserProfile = (name,image) => {
    
        return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image,
       
             
          })
    }
   
    // sighn in
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google log in
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // github log in
    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider )
    }
    // logout
    const logOut = () => {
       
        setUser(null)
        signOut(auth)
    }
    // observer
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, currentUser => {
           
        setUser(currentUser)
        if(currentUser){
            const userInfo ={
                email:currentUser.email
            }
          axiosPublic.post('/jwt',userInfo)
          .then(res => {
            if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
            }
          })
        }
        else{
             localStorage.removeItem('access-token')
        }
        setLoading(false)
            
        });
        return () => unsubscribe();
    },[])

const allvalues = {createUser,
    updateUserProfile , 
    signInUser, 
    googleLogIn, 
    githubLogIn,
    logOut,
    user ,
    loading}
    return (
        <AuthContext.Provider value={allvalues}>
               {children} 
        </AuthContext.Provider>
        
       
    );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
    children: PropTypes.element.isRequired
  };