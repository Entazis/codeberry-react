import React from 'react';
import classes from './Profile.module.css';
import {
    Container,
    Row,
    Col,
    FormGroup
} from 'react-bootstrap';

import Navigation from '../Lessons/Navigation/Navigation';
import {faSlack} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const profile = () => {
    return (
        <Row className={classes.Profile}>
            <Navigation/>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <div className={classes.PageHeader}>
                                <h1>Profile page</h1>
                            </div>
                        </Row>
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
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};

export default profile;
