import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Navigation from './Navigation/Navigation';
import Content from './Content/Content';

const lessons = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navigation />
                </Col>
                <Col>
                    <Content />
                </Col>
            </Row>
        </Container>
    );
};

export default lessons;
