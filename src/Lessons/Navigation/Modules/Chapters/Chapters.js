import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        {
            return (
                <div className={classes.Chapter} key={chapter.id}>
                    <Accordion as={Card} defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={'c' + index}>
                            <div className={classes.ChapterHeader}>
                                {chapter.title}
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse as={Card.Body} eventKey={'c' + index}>
                            <div className={classes.ChapterBody}>
                                <Lessons lessons={chapter.lessons}/>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            );
        }
    );

    return (
        <React.Fragment>
            {chapterList}
        </React.Fragment>
    );
};

export default chapters;
