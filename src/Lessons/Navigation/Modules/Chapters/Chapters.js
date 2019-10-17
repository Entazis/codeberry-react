import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        {
            return (
            <div className={classes.Chapter} key={chapter.id}>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={'c' + index}>
                        {chapter.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={'c' + index}>
                        <Card.Body>
                            <Lessons lessons={chapter.lessons}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
            );
        }
    );

    return (
        <div className={classes.Chapters}>
            <Accordion defaultActiveKey="0">
                {chapterList}
            </Accordion>
        </div>
    );
};

export default chapters;
