import React
    from 'react';
import classes from './Auth.module.css';
import {
    Container,
    Col,
    Row
} from 'react-bootstrap';

const auth = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Row>
                        <img
                            className={[classes.LogoMain, classes.ImgResponsive].join(' ')}
                            src="/images/logo/logo-text-horizontal@0.5.png"
                            alt="CodeBerry-logo" />
                        <p className={classes.Lead}>
                            <span className={classes.TextBerry}>Log in</span> to the programming school
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default auth;