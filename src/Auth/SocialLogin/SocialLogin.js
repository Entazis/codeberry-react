import React
    from 'react';
import classes
    from './SocialLogin.module.css';
import {
    Col,
    Row
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const socialLogin = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default socialLogin;
