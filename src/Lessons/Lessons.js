import React from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetchAssignmentDataAndProjectMap from '../hooks/useFetchAssignmentDataAndProjectMap';

const Lessons = () => {
    const { assignmentData, projectMap } = useFetchAssignmentDataAndProjectMap(window.location.href);

    return (
        <React.Fragment>
            <Content templateHtml={assignmentData ? assignmentData.templateHtml : null}/>
            <Navigation projectMap={projectMap ? projectMap : null}/>
            <Feedback/>
        </React.Fragment>
    );
};

export default Lessons;
