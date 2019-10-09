import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import { useWindowSize } from './hooks/useWindowSize';

const initialUserState = {
    userId: null,
    isSignedIn: false
};

const App = () => {
    const [user, setUser] = useState(initialUserState);

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width >= 1360;

    const onUserSignedIn = (e) => {
        e.preventDefault();
        setUser({userId: 'userid-1', isSignedIn: true});
    };

    const onUserSignedOut = (e) => {
        e.preventDefault();
        setUser({userId: null, isSignedIn: false});
    };

    return (
        <div className={classes.App}>
            <Layout isDesktop={isDesktop} user={user}>
                <Switch>
                    <Route path='/auth' component={() => <Auth user={user} signedIn={onUserSignedIn} signedOut={onUserSignedOut}/>} />
                    <Route path='/lessons' component={() => <Lessons user={user} isDesktop={isDesktop}/>} />
                    <Route path="/" exact component={""}/>
                    <Redirect to="/auth"/>
                </Switch>
            </Layout>
        </div>
    );
};

export default App;