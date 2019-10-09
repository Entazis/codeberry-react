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
        </React.Fragment>
    );
};

export default socialLogin;
