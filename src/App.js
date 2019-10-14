import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './customStyle.css';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import { useAuth } from "./hooks/useAuth";

const App = () => {
    const auth = useAuth();

    return (
        <div className={classes.App}>
            <Layout>
                <Switch>
                    <Route path='/auth/logout' render={() => {
                        auth.signOut().then(() => console.log('Successfully signed out!'));
                        return <Redirect to='/auth' />;
                    }} />
                    <Route path="/lessons" render={() => {
                        return (auth.user) ? <Lessons /> : <Redirect to='/auth' />;
                    }} />
                    <Route path='/auth' render={() => {
                        return (auth.user) ? <Redirect to='/lessons' /> : <Auth />;
                    }} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;