import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile, faMeh, faFrown} from '@fortawesome/free-solid-svg-icons';

import classes from './Feedback.module.css';

const feedback = () => {
    return (
        <Row>
            <Col sm={{span: 8, offset: 2}}>
                <div className={classes.FeedbackPanel}>
                        <div className={classes.FeedbackFacesText}>How did this assignment make you feel?</div>
                        <div className={classes.FeedbackFaces}>
                            <FontAwesomeIcon icon={faFrown} size={'3x'} className={classes.FeedbackFace}/>
                            <FontAwesomeIcon icon={faMeh} size={'3x'} className={classes.FeedbackFace}/>
                            <FontAwesomeIcon icon={faSmile} size={'3x'} className={classes.FeedbackFace}/>
                        </div>
                </div>
            </Col>
        </Row>
    );
};

export default feedback;
