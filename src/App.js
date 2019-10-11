import React, { useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './customStyle.css';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import { useWindowSize } from './hooks/useWindowSize';
import { ProvideAuth, useAuth } from "./hooks/useAuth";

const App = () => {
    const auth = useAuth();
    const windowSize = useWindowSize();
    const isLessonsOnMobile = windowSize.width < 1360 && window.location.pathname.startsWith('/lessons');

    const authCheckState = useCallback(async () => {
        const user = localStorage.getItem('user');
        if (!user) {
            try {
                if (auth.user) {
                    await auth.signOut();
                }
            } catch (e) {
                console.log('Something went wrong: ', e);
            }
        } else {
            const expirationDate = new Date(user.expirationDate);
            if (expirationDate <= new Date()) {
                try {
                    await auth.signOut();
                } catch (e) {
                    console.log('Something went wrong: ', e);
                }
            } else {
                localStorage.setItem('user', auth.user);
                setTimeout(async () => {
                    try {
                        await auth.signOut();
                    } catch (e) {
                        console.log('Something went wrong: ', e);
                    }
                }, 3600 * 1000);
            }
        }
    }, [auth]);

    useEffect(() => {
        authCheckState();
    }, [authCheckState]);

    return (
        <div className={classes.App}>
            <ProvideAuth>
                <Layout isLessonsOnMobile={isLessonsOnMobile}>
                    {auth.user ? (
                        <React.Fragment>
                            <Switch>
                                <Route path='/lessons' component={() => <Lessons user={auth.user} isLessonsOnMobile={isLessonsOnMobile}/>} />
                                <Route path='/logout' render={async () => {
                                    try {
                                        await auth.signOut();
                                        localStorage.removeItem('user');
                                        return <Redirect to={'/'} />;
                                    } catch (e) {
                                        console.log('Something went wrong: ', e);
                                    }
                                }}/>
                                <Redirect to="/lessons"/>
                            </Switch>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Switch>
                                <Route path='/auth' component={() => <Auth />} />
                                <Redirect to="/auth"/>
                            </Switch>
                        </React.Fragment>
                    )}
                </Layout>
            </ProvideAuth>
        </div>
    );
};

export default App;