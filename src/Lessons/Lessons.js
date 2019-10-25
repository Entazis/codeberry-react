import React, {useState, useEffect} from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetch from '../hooks/useFetch';

const Lessons = () => {
    const { response, error } = useFetch('http://127.0.0.1:3000' + window.location.pathname, null);
    const [templateHtml, setTemplateHtml] = useState(null);
    const [projectMap, setProjectMap] = useState(null);

    useEffect(() => {
        if (response && !error) {
            setTemplateHtml(response.assignmentData.templateHtml);
            setProjectMap(response.projectMap);
        }
    }, [response, error]);

    return (
        <React.Fragment>
            <Content templateHtml={templateHtml}/>
            <Navigation projectMap={projectMap}/>
            <Feedback/>
        </React.Fragment>
    );
};

export default Lessons;
