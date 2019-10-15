import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Button, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        {
            return (
            <div className={classes.Chapter} key={chapter.id}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={'c' + index}>
                            {chapter.title}
                        </Accordion.Toggle>
                    </Card.Header>
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
            {chapterList}
        </div>
    );
};

export default chapters;
