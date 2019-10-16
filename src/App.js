import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

import './customStyle.css';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import Profile from './User/Profile/Profile';
import Referral from './User/Referral/Referral';
import Search from './User/Search/Search';
import { useAuth } from "./hooks/useAuth";

const App = () => {
    const auth = useAuth();
    let routes = <Spinner animation="grow" variant="danger"/>;

    if (!auth.loading) {
        routes = (
            <Switch>
                <Route path='/auth/logout' render={() => {
                    auth.signOut().then(() => console.log('Successfully signed out!'));
                    return <Redirect to='/auth'/>;
                }}/>
                <Route path="/lessons" render={() => {
                    return (auth.user) ? <Lessons/> : <Redirect to='/auth'/>;
                }}/>
                <Route path='/auth' render={() => {
                    return (auth.user) ? <Redirect to='/lessons'/> : <Auth/>;
                }}/>
                <Route path='/user/profile' render={() => {
                    return (auth.user) ? <Profile/> : <Redirect to='/auth'/>;
                }}/>
                <Route path='/user/referral' render={() => {
                    return (auth.user) ? <Referral/> : <React to='/auth'/>;
                }}/>
                <Route path='/user/search' render={() => {
                    return (auth.user) ? <Search/> : <React to='/auth'/>;
                }}/>
                <Redirect to='/lessons'/>
            </Switch>
        );
    }

    return (
        <div className={classes.App}>
            <Layout>
                {routes}
            </Layout>
        </div>
    );
};

export default App;