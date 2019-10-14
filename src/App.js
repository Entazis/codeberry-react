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
                        return <Redirect to='/' />;
                    }} />
                    <Route path='/auth' component={Auth} />
                    <Route path="/lessons" component={Lessons} />
                    <Route path='/' render={() => 'Main page'} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;