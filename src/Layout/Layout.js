import React from 'react';

import classes from './Layout.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {useWindowSize} from '../hooks/useWindowSize';

const Layout = (props) => {
    const windowSize = useWindowSize();

    return (
        <div className={classes.Layout}>
            <Header />
            <main className={classes.Main}>
                {props.children}
            </main>
            <Footer isLessonsOnMobile={windowSize.width < 1360 && window.location.pathname.startsWith('/lessons')} />
        </div>
    );
};

export default Layout;