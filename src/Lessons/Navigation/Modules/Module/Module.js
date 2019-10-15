import React
    from 'react';
import {
    Accordion,
    Button,
    Card
} from 'react-bootstrap';

import Chapters from './Chapters/Chapters';

const module = (props) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.index}>
                    {props.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.index}>>
                <Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Chapters chapters={props.chapters}/>
                    </Accordion>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default module;
