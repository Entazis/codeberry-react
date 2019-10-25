import React from 'react';

import classes from './Lessons.module.css';
import {NavLink} from 'react-router-dom';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const lessons = (props) => {
    const lessonList = props.lessons.map((lesson, index) =>
        {
            const lessonClasses = [classes.Lesson];
            const lessonTitleClasses = [classes.LessonTitle];
            if (lesson.finished) {
                lessonClasses.push(classes.Finished);
                lessonTitleClasses.push(classes.LessonTitleFinished)
            }

            return (
                <div className={lessonClasses.join(' ')} key={index}>
                    <NavLink to='/lessons'>
                        {lesson.finished ?
                            <FontAwesomeIcon icon={faCheckCircle} className={classes.FinishedIcon} /> : null}
                        <span className={lessonTitleClasses.join(' ')}> {lesson.title}</span>
                    </NavLink>
                </div>
            )
        }
    );

    return (
        <React.Fragment>
            {lessonList}
        </React.Fragment>
    );
};

export default lessons;
