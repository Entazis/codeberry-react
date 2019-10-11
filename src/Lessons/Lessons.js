import React from 'react';
import {Redirect} from 'react-router';

import classes from './Lessons.module.css'
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';

const lessons = (props) => {
    const redirect = (!props.user.token) ? <Redirect to="/auth"/> : null;

    const controllerClasses = [classes.Controller];
    if (props.isLessonsOnMobile) {
        controllerClasses.push(classes.BottomFix);
    }

    return (
        <React.Fragment>
            {redirect}
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
