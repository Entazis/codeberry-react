import React
    from 'react';
import classes from './Auth.module.css';
import {
    Container,
    Col,
    Row,
    Alert,
    InputGroup,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const auth = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Row>
                        <Col>
                            <div>
                                <img
                                    className={[classes.LogoMain, classes.ImgResponsive].join(' ')}
                                    src="/images/logo/logo-text-horizontal@0.5.png"
                                    alt="CodeBerry-logo" />
                                <p className={classes.Lead}>
                                    <span className={classes.TextBerry}>Log in</span> to the programming school
                                </p>
                            </div>
                            <div>
                                <Alert variant="danger" dismissible>
                                    You need to log in to view this page
                                </Alert>
                                <Alert variant="info" dismissible>
                                    If you already have an account, use the same login method to access your previously submitted assignments
                                </Alert>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 8, offset: 2}}>
                            <div className={classes.LinerContainer}>
                                <h5 className={classes.Liner}>Use one of your existing accounts</h5>
                            </div>
                            <Row id={"oauth-box"}>
                                <Col sm={12}>
                                    <a href="/auth/facebook"
                                       className={[classes.btn, classes.btnBlock, classes.btnSocial, classes.btnFacebook].join(' ')}>
                                        <FontAwesomeIcon icon={faFacebook} /> Log in with Facebook
                                    </a>
                                    <a href="/auth/google"
                                       className={[classes.btn, classes.btnBlock, classes.btnSocial, classes.btnGoogle].join(' ')}>
                                        <FontAwesomeIcon icon={faGoogle} /> Log in with Google
                                    </a>
                                </Col>
                            </Row>
                            <div className={classes.LinerContainer}>
                                <h5 className={classes.Liner}> Or log in with your email address </h5>
                            </div>
                            <form
                                action="/lessons">
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            type="email"
                                            name="email"
                                            placeholder="my@email.com" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            type="password"
                                            name="password"
                                            placeholder="MyPassword" />
                                    </InputGroup>
                                </FormGroup>

                                <Button variant={"primary"} className={[classes.btnBlock, classes.btnPrimary].join(' ')}>Log in <FontAwesomeIcon icon={faSignInAlt} /></Button>
                            </form>
                            <p className="text-right text-muted">
                                <small><a href="/auth/password-reset">Forgot your password?</a></small>
                            </p>
                            <p className="text-muted">
                                <small>Don't have an account? <a href="/auth/signup"> Sign up now</a>!</small>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default auth;