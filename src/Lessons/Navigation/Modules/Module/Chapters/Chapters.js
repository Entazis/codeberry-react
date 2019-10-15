import React
    from 'react';

import Chapter from './Chapter/Chapter';
import classes from './Chapters.module.css';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        <Chapter
            id={chapter.id}
            title={chapter.title}
            lessons={props.lessons}
            index={index}/>);
    return (
        <div className={classes.Chapters}>
            {chapterList}
        </div>
    );
};

export default chapters;
