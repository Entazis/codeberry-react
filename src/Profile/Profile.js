import React from 'react';
import classes from './Profile.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

import Navigation from '../Lessons/Navigation/Navigation';
import SubscriptionDetails from './SubscriptionDetails/SubscriptionDetails';
import PersonalData from './PersonalData/PersonalData';
import Badges from './Badges/Badges';
import FinishedLessons from './FinishedLessons/FinishedLessons';

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
                        <SubscriptionDetails/>
                        <PersonalData/>
                        <Badges/>
                        <FinishedLessons/>
                        <hr/>
                        <Row>
                            <Col md={12}>
                                <div className={classes.PageFooter}>
                                    Viewing profile of Szabó Bence |
                                    <FontAwesomeIcon icon={faGoogle} /> szabo.bence.tat@gmail.com<br/>
                                    You are logged in as Szabó Bence | szabo.bence.tat@gmail.com<br/>
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
