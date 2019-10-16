import React
    from 'react';
import {
    Col,
    FormGroup,
    Row
} from 'react-bootstrap';
import classes
    from '../Profile.module.css';

const personalData = () => {
    return (
        <Row>
            <h3>Your personal data</h3>
            <Col sm={12}>
                <div className={classes.SubscriptionWellFixed}>
                    <FormGroup>
                        <Row>
                            <Col sm={12}>
                                <p className="text-muted">
                                    You are logged in as Szabó Bence | szabo.bence.tat@gmail.com<br/>
                                    Viewing profile of Szabó Bence
                                </p>
                            </Col>
                            <Col sm={6}>
                                <label htmlFor="">Name:</label>
                            </Col>
                            <Col sm={6}>
                                <p className="text-muted">Szabó Bence
                                </p>
                            </Col>
                            <Col sm={6}>
                                <label htmlFor="">Email:</label>
                            </Col>
                            <Col sm={6}>
                                <p className="text-muted">szabo.bence.tat@gmail.com
                                </p>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Row>
                        <Col sm={12}>
                            <p className="text-center">
                                <a className="btn btn-lg btn-primary"
                                   href="/user/confirm-email">Send confirmation email</a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default personalData;
