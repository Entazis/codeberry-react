import React from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetch from '../hooks/useFetch';

const Lessons = () => {
    const { response, error, isLoading } = useFetch('http://127.0.0.1:3000/lessons/spa/welcome-project/quinin/0', {});
    console.log(response, error, isLoading);

    return (
        <React.Fragment>
            <Content/>
            <Navigation/>
            <Feedback/>
        </React.Fragment>
    );
};

export default Lessons;
