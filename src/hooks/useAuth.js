import React, { useState, useEffect, useContext, createContext } from 'react';
import nconf from 'nconf';
import * as firebase from 'firebase';
import 'firebase/auth';

nconf.file({
    file: '../../env.local.json'
});
firebase.initializeApp(nconf.get('firebase'));

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

    const signIn = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };

    const signUp = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
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
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return {
        user,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}