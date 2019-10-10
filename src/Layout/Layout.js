import React from 'react';

import classes from './Layout.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Header user={props.user} />
            <main className={classes.Main}>
                {props.children}
            </main>
            <Footer isLessonsOnMobile={props.isLessonsOnMobile}/>
        </div>
    );
};

export default Layout;