import React from 'react';

import classes from './Modules.module.css';
import {Accordion, Button, Card} from 'react-bootstrap';
import Chapters from './Chapters/Chapters';

const modules = (props) => {
    const moduleList = props.modules.map((module, index) =>
        {
            return (
            <div className={classes.Module} id={module.id + index}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            {module.title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>>
                        <Card.Body>
                            <Accordion defaultActiveKey="0">
                                <Chapters chapters={module.chapters}/>
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        )
        }
    );
    console.log(moduleList);

    return (
        <div className={classes.Modules}>
            {moduleList}
        </div>
    );
};

export default modules;
