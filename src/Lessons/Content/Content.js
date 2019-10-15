import React, {
    useState
} from 'react';

import classes from './Content.module.css';
import SubmissionForm from './SubmissionForm/SubmissionForm';

const Content = () => {
    const [lessonHTML] = useState(
        <React.Fragment>
            <h2>How to use this project</h2>
            <p>In this project, you'll find everything you need to know about the basics of CSS to complete other CodeBerry projects.</p>
            <p>If you are a complete beginner, these assignments will teach you the basic elements of this language.</p>
            <p>If you are on a more intermediate level, think of this project as a handy summary to which you can return when you are unsure about something.</p>
            <p>If this is your first time here, we strongly advise you to complete the accompanying microassignments in every article.</p>
        </React.Fragment>
    );

    return (
        <div className={classes.Content}>
            {lessonHTML}
            <SubmissionForm/>
        </div>
    );
};

export default Content;
