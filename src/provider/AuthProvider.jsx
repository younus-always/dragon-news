import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      // New User Sign Up
      const createNewUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // Sign In..
      const userLogin = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      // Sign Out User..
      const signOutUser = () => {
            setLoading(true)
            return signOut(auth)
      }

      // Update User Profile..
      const updateUserProfile = updateData => {
            return updateProfile(auth.currentUser, updateData)
      }

      const authInfo = {
            user,
            setUser,
            createNewUser,
            userLogin,
            updateUserProfile,
            signOutUser,
            loading
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            });

            return () => {
                  unSubscribe()
            };
      }, [])


      return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>)
}

export default AuthProvider