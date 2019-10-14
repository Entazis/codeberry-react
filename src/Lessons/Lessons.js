import React from 'react';

import classes from './Lessons.module.css'
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import {useWindowSize} from '../hooks/useWindowSize';

const Lessons = () => {
    const windowSize = useWindowSize();

    const controllerClasses = [classes.Controller];
    if (windowSize.width < 1360) {
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

export default Lessons;
