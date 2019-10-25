import React from 'react';

import classes from './Content.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';

const Content = (props) => {
    const windowSize = useWindowSize();

    const contentClasses = [classes.Content];
    if (windowSize.width >= 1360) {
        contentClasses.push(classes.ContentDesktop);
    }

    return (
        <div className={contentClasses.join(' ')} dangerouslySetInnerHTML={{__html: props.templateHtml}}/>
    );
};

export default Content;
