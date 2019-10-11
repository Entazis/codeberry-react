import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './customStyle.css';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import { useWindowSize } from './hooks/useWindowSize';

const initialUserState = {
    token: null,
    expirationDate: null,
    userId: null,

    userName: '',
    userInitials: ''
};

const App = () => {
    const [user, setUser] = useState(initialUserState);
    const windowSize = useWindowSize();

    const isLessonsOnMobile = windowSize.width < 1360 && window.location.pathname.startsWith('/lessons');

    const removeUserFromLocalStorage = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userInitials');
    }, []);

    const signOutUser = useCallback(() => {
        setUser({
            token: null,
            expirationDate: null,
            userId: null,
            userName: '',
            userInitials: ''});
        removeUserFromLocalStorage();

        return <Redirect to={'/'} />;
    }, [setUser, removeUserFromLocalStorage]);

    const checkAuthTimeout = useCallback((expirationTime) => {
        return setTimeout(() => {
            signOutUser();
        }, expirationTime * 1000);
    }, [signOutUser]);

    const saveUserInLocalStorage = useCallback(() => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('expirationDate', user.expirationDate);
        localStorage.setItem('userId', user.userId);
        localStorage.setItem('userName', user.userName);
        localStorage.setItem('userInitials', user.userInitials);
        checkAuthTimeout(3600);
    }, [user.token, user.expirationDate, user.userId, user.userName, user.userInitials, checkAuthTimeout]);

    const signInUser = useCallback(() => {
        setUser({
            token: 'jfglfnggmljkhén45kjfhnchéh454fiadbfejáfniadkf45hjhjhj4654',
            expirationDate: new Date(new Date().getTime() + 3600 * 1000),
            userId: 'userid-1',
            userName: 'Laci',
            userInitials: 'BL'});
        saveUserInLocalStorage();

        return <Redirect to={'/'} />;
    }, [setUser, saveUserInLocalStorage]);

    const authCheckState = useCallback(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            signOutUser();
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                signOutUser();
            } else {
                saveUserInLocalStorage();
            }
        }
    }, [signOutUser, saveUserInLocalStorage]);

    const onUserSignedIn = useCallback((e) => {
        e.preventDefault();
        signInUser();
    }, [signInUser]);

    const onUserSignedOut = useCallback((e) => {
        e.preventDefault();
        signOutUser();
    }, [signOutUser]);

    useEffect(() => {
        authCheckState();
    }, [authCheckState]);

    return (
        <div className={classes.App}>
            <Layout isLessonsOnMobile={isLessonsOnMobile} user={user}>
                <Switch>
                    <Route path='/auth' component={() => <Auth user={user} signedIn={onUserSignedIn} signedOut={onUserSignedOut}/>} />
                    <Route path='/lessons' component={() => <Lessons user={user} isLessonsOnMobile={isLessonsOnMobile}/>} />
                    <Route path='/login' render={signInUser} />
                    <Route path='/logout' render={signOutUser} />
                    <Route path="/" exact component={() => <Lessons user={user} isLessonsOnMobile={isLessonsOnMobile}/>}/>
                    <Redirect to="/lessons"/>
                </Switch>
            </Layout>
        </div>
    );
};

export default App;