import React from 'react';
import { Redirect } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetchProjectMap from '../hooks/useFetchProjectMap';
import {Spinner} from 'react-bootstrap';

const Lessons = () => {
    let redirect = null;
    if (window.location.pathname.match(/\/spa\/lessons(\/)?$/)) {
        redirect = <Redirect to='/spa/lessons/welcome-project/quinin/0'/>;
    }

    const { projectMap, isLoading, error } = useFetchProjectMap();
    const assignmentData = null;

    return (
        <React.Fragment>
            {redirect}
            {error ?
                <p>Something went wrong, please try again later!</p> : null
            }
            {isLoading ?
                <Spinner animation="grow" variant="danger"/> :
                (
                    <React.Fragment>
                        <Content templateHtml={assignmentData ? assignmentData.templateHtml : null}/>
                        <Navigation projectMap={projectMap ? projectMap : null}/>
                        <Feedback/>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default Lessons;
