import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';
import Lessons from './Lessons/Lessons';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/auth' component={Auth} />
                    <Route path='/lessons' component={Lessons} />
                    <Route path="/" exact component={""}/>
                    <Redirect to="/auth"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;