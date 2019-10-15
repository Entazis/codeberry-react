import React from 'react';
import classes from './Profile.module.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import Navigation from '../Lessons/Navigation/Navigation';
import SubscriptionDetails from './SubscriptionDetails/SubscriptionDetails';
import PersonalData from './PersonalData/PersonalData';


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
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};

export default profile;
