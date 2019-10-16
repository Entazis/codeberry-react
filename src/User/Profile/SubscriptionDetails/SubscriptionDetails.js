import React from 'react';
import {Col, FormGroup, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSlack} from '@fortawesome/free-brands-svg-icons';

import classes from '../Profile.module.css';

const subscriptionDetails = () => {
    return (
        <Row>
            <h3>Your subscription details</h3>
            <Col sm={12}>
                <div className={classes.SubscriptionWellFixed}>
                    <Row>
                        <FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <label htmlFor="">Your subscription type:</label>
                                </Col>
                                <Col sm={6}>
                                    <p className="text-muted">Free</p>
                                </Col>
                                <Col sm={6}>
                                    <label htmlFor="">Your subscription ends:</label>
                                </Col>
                                <Col sm={6}>
                                    <p className="text-muted">2020-03-29</p>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col sm={12}>
                                <p className={["text-muted", classes.SideNote].join(' ')}>
                                    If you have questions, feel free to ask Amanda on <FontAwesomeIcon icon={faSlack} />Slack,
                                    or email us at <a href="mailto:hello@codeberryschool.com">hello@codeberryschool.com</a>.
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default subscriptionDetails;
