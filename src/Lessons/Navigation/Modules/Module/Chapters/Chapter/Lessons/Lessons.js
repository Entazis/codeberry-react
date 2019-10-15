import React
    from 'react';

import classes from './Lessons.module.css';
import Lesson from './Lesson/Lesson';


const lessons = (props) => {
    const lessonList = props.lessons.map(lesson=>
        <Lesson
            id={lesson.id}
            title={lesson.title}
            finished={lesson.finished}/>);

    return (
        <div className={classes.Lessons}>
            {lessonList}
        </div>
    );
};

export default lessons;
