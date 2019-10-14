import React, {useState} from 'react';
import classes from './Navigation.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';

const Navigation = () => {
    const [moduleTitle, setModuleTitle] = useState('Welcome to CodeBerry');
    const [moduleProgress, setModuleProgress] = useState('100%');
    const [lessonTitle, setLessonTitle] = useState('Welcome to CodeBerry');
    const windowSize = useWindowSize();

    const controllerClasses = [classes.Controller];
    if (windowSize.width < 1360) {
        controllerClasses.push(classes.BottomFix);
    }

    return (
        <div className={controllerClasses.join(' ')}>
            <div className={classes.Header}>
                <div className={classes.Titles}>
                    <h1 title={moduleTitle}>{moduleTitle} <small className="text-muted">({moduleProgress})</small></h1>
                    <p>{lessonTitle}</p>
                </div>
                <div className={classes.Thumbnail}>
                    <img src="/logo192.png" alt="Project thumbnail" />
                </div>
            </div>
            <div className={classes.Body}>...</div>
        </div>
    );
};

export default Navigation;
