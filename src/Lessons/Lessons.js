import React, {useState, useEffect} from 'react';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Feedback from './Feedback/Feedback';
import useFetch from '../hooks/useFetch';

const Lessons = () => {
    const {response, error, isLoading} = useFetch('http://127.0.0.1:3000' + window.location.pathname, {});
    const [templateHtml, setTemplateHtml] = useState(null);
    const [projectMap, setProjectMap] = useState(null);

    useEffect(() => {
        if (response && !error) {
            setTemplateHtml(response.assignmentData.templateHtml);
            setProjectMap(response.projectMap);
        }
    }, [response, error, setTemplateHtml, setProjectMap]);

    return (
        <React.Fragment>
            <Content templateHtml={templateHtml} isLoading={isLoading}/>
            <Navigation projectMap={projectMap}/>
            <Feedback/>
        </React.Fragment>
    );
};

export default Lessons;
