import React, { useCallback } from 'react';
import { Redirect } from 'react-router';
import { Container, Col, Row, Alert } from 'react-bootstrap';

import classes from './Auth.module.css';
import SocialLogin from './SocialLogin/SocialLogin';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../hooks/useAuth';


const Auth = () => {
    const auth = useAuth();
    const redirect = (auth.user) ? <Redirect to="/lessons"/> : null;

    const signOutUser = useCallback(async () => {
        try {
            await auth.signOut();
            localStorage.removeItem('user');
            return <Redirect to={'/'} />;
        } catch (e) {
            console.log('Something went wrong: ', e);
        }
    }, [auth]);

    const signInUser = useCallback(async (email, password) => {
        try {
            await auth.signIn(email, password);
            localStorage.setItem('user', auth.user);
            setTimeout(() => signOutUser(), 3600 * 1000);
            return <Redirect to={'/'} />;
        } catch (e) {
            console.log('Something went wrong: ', e);
        }
    }, [auth, signOutUser]);

    const signUpUser = useCallback(async (email, password) => {
        try {
            await auth.signUp(email, password);
            localStorage.setItem('user', auth.user);
            setTimeout(() => signOutUser(), 3600 * 1000);
            return <Redirect to={'/'} />;
        } catch (e) {
            console.log('Something went wrong: ', e);
        }
    }, [auth, signOutUser]);

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
                            <SocialLogin signedIn={() => {}} signedOut={() => {}}/>
                            <LoginForm
                                signIn={(email, password) => signInUser(email, password)}
                                signUp={(email, password) => signUpUser(email, password)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;