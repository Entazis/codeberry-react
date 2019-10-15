import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Button, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';

const chapters = (props) => {
    console.log('chapters!');
    const chapterList = props.chapters.map((chapter, index) =>
        {
            console.log('chapter index:', index);
            return (
            <div className={classes.Chapter} id={chapter.id + index}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            {chapter.title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            <Lessons lessons={chapter.lessons}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
            );
        }
    );

    console.log(chapterList);
    return (
        <div className={classes.Chapters}>
            {chapterList}
        </div>
    );
};

export default chapters;
