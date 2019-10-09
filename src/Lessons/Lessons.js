import React from 'react';

import classes from './Lessons.module.css'
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';

const lessons = (props) => {
    const controllerClasses = [classes.Controller];
    if (!props.isDesktop) {
        controllerClasses.push(classes.BottomFix);
    }

    return (
        <React.Fragment>
            <div className={classes.Content}>
                <Content />
            </div>
            <div className={controllerClasses.join(' ')}>
                <Navigation />
            </div>
        </React.Fragment>
    );
};

export default lessons;
