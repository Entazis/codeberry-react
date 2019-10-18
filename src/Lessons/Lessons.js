import React from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';

const Lessons = () => {
    return (
        <React.Fragment>
            <Content/>
            <Navigation/>
            <Feedback/>
        </React.Fragment>
    );
};

export default Lessons;
