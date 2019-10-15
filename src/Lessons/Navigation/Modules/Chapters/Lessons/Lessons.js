import React from 'react';

import classes from './Lessons.module.css';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const lessons = (props) => {
    const lessonList = props.lessons.map((lesson, index) =>
        (
            <div className={classes.Lesson} id={lesson.id + index}>
                <Card>
                    <NavLink to='/lessons'>
                        {lesson.title}
                    </NavLink>
                </Card>
            </div>
        )
    );

    return (
        <div className={classes.Lessons}>
            {lessonList}
        </div>
    );
};

export default lessons;
