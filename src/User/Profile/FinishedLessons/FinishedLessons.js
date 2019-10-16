import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const finishedLessons = () => {
    return (
        <Row>
            <Col md={12}>
                <h3>Finished lessons</h3>
                <Card>
                    <Card.Header>Welcome to CodeBerry</Card.Header>
                    <Card.Body>
                        <h5>Welcome to CodeBerry!</h5>
                        <ul className="list-group">
                            <li className="list-group-item"
                                id="quinin-assignment01">
                                <small>
                                    <Link to="/lessons/welcome-project/quinin/0">Welcome, Future Programmer!</Link>
                                    <span className="text-muted" title="2018. 05. 10. 08:29"> | 2018. 05. 10.</span>
                                    <span> | career-change;hobby;curious;websites;apps;gadgets;</span>
                                </small>
                            </li>
                            <li className="list-group-item"
                                id="quinin-assignment02">
                                <small>
                                    <Link to="/lessons/welcome-project/quinin/1">So What Does a Programmer Do?</Link>
                                    <span className="text-muted" title="2018. 05. 10. 08:29"> | 2018. 05. 10.</span>
                                    <span> | </span>
                                </small>
                            </li>
                            <li className="list-group-item"
                                id="quinin-assignment03">
                                <small>
                                    <Link to="/lessons/welcome-project/quinin/2">Breaking the Language Barrier</Link>
                                    <span className="text-muted" title="2018. 05. 10. 08:30"> | 2018. 05. 10.</span>
                                    <span> | </span>
                                </small>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default finishedLessons;
