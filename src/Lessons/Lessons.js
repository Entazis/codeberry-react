import React from 'react';
import { Redirect } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetch from '../hooks/useFetch';
import {Spinner} from 'react-bootstrap';
import {getProjects} from '../graphql/queries';

const Lessons = () => {
    let redirect = null;
    if (window.location.pathname.match(/\/spa\/lessons(\/)?$/)) {
        redirect = <Redirect to='/spa/lessons/welcome-project/quinin/0'/>;
    }

    const { response, error, isLoading } = useFetch('http://localhost:3002/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: getProjects
        })
    });

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
                        <Navigation projectMap={response ? response.data.projects : null}/>
                        <Feedback/>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default Lessons;
