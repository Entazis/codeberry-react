import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/auth' component={Auth} />
                    <Route path='/lessons' component={""} />
                    <Route path="/" exact component={""}/>
                    <Redirect to="/auth"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;