import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

import './globalStyle.css';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';

import { useAuth } from "./hooks/useAuth";

const Profile = lazy(() => import('./User/Profile/Profile'));
const Referral = lazy(() => import('./User/Referral/Referral'));
const Search = lazy(() => import('./User/Search/Search'));
const Projects = lazy(() => import('./Admin/CurriculumRepository/Projects/Projects'));
const Concepts = lazy(() => import('./Admin/CurriculumRepository/Concepts/Concepts'));
const CurriculumProcesses = lazy(() => import('./Admin/CurriculumRepository/Processes/Processes'));
const I18nProcesses = lazy(() => import('./Admin/i18n/Processes/Processes'));
const Reference = lazy(() => import('./Admin/Reference/Reference'));
const Stats = lazy(() => import('./Admin/Stats/Stats'));
const TestTools = lazy(() => import('./Admin/TestTools/TestTools'));

const App = () => {
    const auth = useAuth();
    const spinner = <Spinner animation="grow" variant="danger"/>;
    let routes = spinner;

    if (!auth.loading) {
        routes = (
            <Switch>
                <Route path='/spa/auth/logout' render={() => {
                    auth.signOut().then(() => console.log('Successfully signed out!'));
                    return <Redirect to='/spa/auth'/>;
                }}/>
                <Route path="/spa/lessons" render={() => {
                    return (auth.user) ? <Lessons/> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/auth' render={() => {
                    return (auth.user) ? <Redirect to='/spa/lessons'/> : <Auth/>;
                }}/>
                <Route path='/spa/user/profile' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Profile/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/user/referral' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Referral/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/user/search' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Search/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/curriculum-repository/projects' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Projects/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/curriculum-repository/concepts' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Concepts/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/curriculum-repository/processes' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <CurriculumProcesses/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/i18n/processes' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <I18nProcesses/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/reference' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Reference/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/stats' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <Stats/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Route path='/spa/test-tools' render={() => {
                    return (auth.user) ?
                        <Suspense fallback={spinner}>
                            <TestTools/>
                        </Suspense> : <Redirect to='/spa/auth'/>;
                }}/>
                <Redirect to='/spa/lessons'/>
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