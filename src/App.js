import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './App.module.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';
import { useWindowSize } from './hooks/useWindowSize';

function App() {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width >= 1360;

    return (
        <div className={classes.App}>
            <Layout isDesktop={isDesktop}>
                <Switch>
                    <Route path='/auth' component={Auth} />
                    <Route path='/lessons' component={() => <Lessons isDesktop={isDesktop}/>} />
                    <Route path="/" exact component={""}/>
                    <Redirect to="/auth"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;