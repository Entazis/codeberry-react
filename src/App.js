import React from 'react';
import './App.css';

import Layout from './Layout/Layout';
import Navbar from './Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Layout>
                <Navbar/>
                App in layout next to the navbar
            </Layout>
        </div>
    );
}

export default App;
