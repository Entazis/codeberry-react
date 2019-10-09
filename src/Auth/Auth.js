import React
    from 'react';
import {Redirect} from 'react-router';
import { Container, Col, Row, Alert } from 'react-bootstrap';

import classes from './Auth.module.css';
import SocialLogin from './SocialLogin/SocialLogin';
import LoginForm from './LoginForm/LoginForm';


const auth = (props) => {
    const redirect = (props.user.isSignedIn) ? <Redirect to="/lessons"/> : null;
    return (
        <Container fluid>
            {redirect}
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Row>
                        <Col>
                            <div>
                                <img className={[classes.LogoMain, classes.ImgResponsive].join(' ')} src="/images/logo/logo-text-horizontal@0.5.png" alt="CodeBerry-logo" />
                                <p className={classes.Lead}><span className={classes.TextBerry}>Log in</span> to the programming school</p>
                            </div>
                            <div>
                                <Alert variant="danger" dismissible>You need to log in to view this page</Alert>
                                <Alert variant="info" dismissible>If you already have an account, use the same login method to access your previously submitted assignments</Alert>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 8, offset: 2}}>
                            <div className={classes.LinerContainer}>
                                <h5 className={classes.Liner}>Use one of your existing accounts</h5>
                            </div>
                            <SocialLogin signedIn={props.signedIn} signedOut={props.signedOut}/>

                            <div className={classes.LinerContainer}>
                                <h5 className={classes.Liner}> Or log in with your email address </h5>
                            </div>
                            <LoginForm signedIn={props.signedIn} signedOut={props.signedOut}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default auth;