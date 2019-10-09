import React from 'react';

import classes from './Layout.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useWindowSize } from '../hooks/useWindowSize';

const Layout = (props) => {
    const windowSize = useWindowSize();

    return (
        <div className={classes.Layout}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;