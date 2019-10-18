import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        {
            let completedLessons = 0;
            const numberOfLessons = chapter.lessons.length;
            for (const lesson of chapter.lessons) {
                completedLessons += lesson.finished;
            }

            const headerClasses = [classes.ChapterHeader];
            if (completedLessons === numberOfLessons) {
                headerClasses.push(classes.Finished);
            }

            return (
                <div className={classes.Chapter} key={chapter.id}>
                    <Accordion as={Card} defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={'c' + index}>
                            <div className={headerClasses.join(' ')}>
                                <span className={classes.ChapterTitle}>{chapter.title}</span>
                                {completedLessons === numberOfLessons ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className={classes.ProgressDoneRight} />
                                ) : (
                                    <span className={classes.ProgressRight} title="Module status">{completedLessons + ' / ' + numberOfLessons}</span>
                                )}
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
