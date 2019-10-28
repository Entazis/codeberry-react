import React from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetchAssignmentDataAndProjectMap from '../hooks/useFetchAssignmentDataAndProjectMap';
import {Spinner} from 'react-bootstrap';

const Lessons = () => {
    const { assignmentData, projectMap, isLoading, error } = useFetchAssignmentDataAndProjectMap(window.location.href);

    return (
        <React.Fragment>
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
