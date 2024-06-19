import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Create a context to manage authentication state
const AuthContext = createContext();

const getUser = async (email, token) => {
    const response = await axios.get(`${import.meta.env.VITE_serverSideLink}/users/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data;
};

// Create a provider component
export const AuthProvider = (data) => {
    const { children } = data;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [storedUser, setStoredUser] = useState(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        // Set up an observer to listen for changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

            if (currentUser?.providerData?.[0]?.providerId === 'google.com') {
                setUser(currentUser);
                try {
                    await axios.post(`${import.meta.env.VITE_serverSideLink}/users`, { email: currentUser?.email.trim().toLowerCase(), fullName: currentUser?.displayName, imageUrl: currentUser?.photoURL, gender: "" });

                    const response = await axios.post(`${import.meta.env.VITE_serverSideLink}/jwt`, {
                        email: currentUser?.email,
                    });
                    const token = response.data.data;

                    // Store the JWT token in localStorage
                    localStorage.setItem('access_token', token);

                    // Use React Query to fetch user information from the backend
                    queryClient.setQueryData(['user', currentUser.email], getUser(currentUser.email, token)).then(d => setStoredUser(d));
                } catch (error) {
                    console.error(error.message);
                }
            }
            else if (currentUser) {
                setUser(currentUser);

                // Get JWT token from your backend API
                try {
                    const response = await axios.post(`${import.meta.env.VITE_serverSideLink}/jwt`, {
                        email: currentUser?.email,
                    });
                    const token = response.data.data;

                    // Store the JWT token in localStorage
                    localStorage.setItem('access_token', token);

                    // Use React Query to fetch user information from the backend
                    queryClient.setQueryData(['user', currentUser.email], getUser(currentUser.email, token)).then(d => setStoredUser(d));
                } catch (error) {
                    console.error(error.message);
                }
            } else {
                setUser(null);
                setStoredUser(null);
                localStorage.removeItem('access_token');
            }
        })
        setLoading(false);

        return () => unsubscribe();
    }, [queryClient]);

    // Function to create a new user with email and password
    const createNewUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in with email and password
    const signIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    // Function to sign out
    const logOut = async () => {
        return await signOut(auth);
    };

    // Function to google signIn
    const googleSignIn = async () => {
        return await signInWithPopup(auth, provider);
    };

    // Expose the authentication functions and user state to the components
    const authInfo = {
        user,
        createNewUser,
        signIn,
        signOut,
        loading,
        setLoading,
        logOut,
        storedUser,
        googleSignIn
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};