import React from 'react';

import classes from './Chapters.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Lessons from './Lessons/Lessons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const chapters = (props) => {
    const chapterList = props.chapters.map((chapter, index) =>
        {
            const headerClasses = [classes.ChapterHeader];
            const titleClasses = [classes.ChapterTitle];
            if (chapter.isFinished) {
                headerClasses.push(classes.Finished);
                titleClasses.push(classes.ChapterTitleFinished)
            }

            return (
                <div className={classes.Chapter} key={index}>
                    <Accordion as={Card} defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={'c' + index}>
                            <div className={headerClasses.join(' ')}>
                                <span className={titleClasses.join(' ')}>{chapter.title}</span>
                                {chapter.isFinished ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className={classes.ProgressDoneRight} />
                                ) : (
                                    <span className={classes.ProgressRight} title="Module status">
                                        {chapter.submittedAssignmentCount + ' / ' + chapter.totalAssignmentCount}
                                    </span>
                                )}
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse as={Card.Body} eventKey={'c' + index}>
                            <div className={classes.ChapterBody}>
                                <Lessons
                                    lessons={chapter.assignments}
                                    moduleName={props.moduleName}
                                    chapterHash={chapter.hash}/>
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
