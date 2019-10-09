import React
    from 'react';
import classes from './Navigation.module.css';

const navigation = () => {
    return (
        <div>
            <div className={classes.Header}>navigation-header</div>
            <div className={classes.Body}>navigation-body</div>
        </div>
    );
};

export default navigation;
