import React, {useState} from 'react';
import classes from './Navigation.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';

const Navigation = () => {
    const [moduleTitle, setModuleTitle] = useState('Welcome to CodeBerry');
    const [moduleProgress, setModuleProgress] = useState('100%');
    const [lessonTitle, setLessonTitle] = useState('Welcome to CodeBerry!');
    const windowSize = useWindowSize();

    const controllerClasses = [classes.Controller];
    const thumbnailClasses = [classes.Thumbnail];
    const headerClasses = [classes.Header];
    if (windowSize.width < 1360) {
        controllerClasses.push(classes.ControllerBottom);
        thumbnailClasses.push(classes.ThumbnailBottom);
        headerClasses.push(classes.HeaderBottom)
    }

    return (
        <div className={controllerClasses.join(' ')}>
            <div className={headerClasses.join(' ')}>
                <div className={classes.Titles}>
                    <h1 className={classes.ModuleTitle} title={moduleTitle}>{moduleTitle} <small className="text-muted">({moduleProgress})</small></h1>
                    <p className={classes.LessonTitle}>{lessonTitle}</p>
                </div>
                <div className={thumbnailClasses.join(' ')}>
                    <img src="/logo192.png" alt="Project thumbnail" className={classes.ThumbnailImg} />
                </div>

            </div>
            <div className={classes.Body}>...</div>
        </div>
    );
};

export default Navigation;
