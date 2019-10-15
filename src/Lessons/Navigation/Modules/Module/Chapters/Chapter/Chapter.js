import React
    from 'react';
import {
    Accordion,
    Button,
    Card
} from 'react-bootstrap';

import Lessons from './Lessons/Lessons';

const chapter = (props) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.index}>
                    {props.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.index}>
                <Card.Body>
                    <Lessons lessons={props.lessons}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default chapter;
