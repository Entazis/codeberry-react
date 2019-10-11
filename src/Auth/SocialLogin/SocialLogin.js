import React
    from 'react';
import classes
    from './SocialLogin.module.css';
import classesAuth
    from '../Auth.module.css';
import {
    Col,
    Row
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const socialLogin = (props) => {
    return (
        <React.Fragment>
            <div className={classesAuth.LinerContainer}>
                <h5 className={classesAuth.Liner}>Use one of your existing accounts</h5>
            </div>
            <Row id={"oauth-box"}>
                <Col sm={12}>
                    <a href="/auth/facebook"
                       onClick={props.signedIn}
                       className={[classes.btn, classes.btnBlock, classes.btnSocial, classes.btnFacebook].join(' ')}>
                        <FontAwesomeIcon icon={faFacebook} /> Log in with Facebook
                    </a>
                    <a href="/auth/google"
                       onClick={props.signedIn}
                       className={[classes.btn, classes.btnBlock, classes.btnSocial, classes.btnGoogle].join(' ')}>
                        <FontAwesomeIcon icon={faGoogle} /> Log in with Google
                    </a>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default socialLogin;
