import React, { useState, useEffect, useContext, createContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

const authContext = createContext({});

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);

    const getUserData = () => {
        return {
            userName: 'defaultUserName',
            userInitials: 'XX',
            isAdmin: true
        };
    };

    const signIn = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                setUserData(getUserData());
                return response.user;
            });
    };

    const signUp = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                setUserData(getUserData());
                return response.user;
            });
    };

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
                setUserData({});
            });
    };

    const sendPasswordResetEmail = email => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    const confirmPasswordReset = (code, password) => {
        return firebase
            .auth()
            .confirmPasswordReset(code, password)
            .then(() => {
                return true;
            });
    };

    useEffect(() => {
        setLoading(true);
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                setUserData(getUserData());
            } else {
                setUser(null);
                setUserData({});
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return {
        user,
        userData,
        loading,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}