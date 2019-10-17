import React from 'react';

import classes from './Modules.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Chapters from './Chapters/Chapters';

const modules = (props) => {
    const moduleList = props.modules.map((module, index) =>
        {
            return (
            <div className={classes.Module} key={module.id}>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={'m' + index}>
                        {module.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={'m' + index}>
                        <Card.Body>
                            <Chapters chapters={module.chapters}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        )
        }
    );

    return (
        <div className={classes.Modules}>
            <Accordion defaultActiveKey="0">
                {moduleList}
            </Accordion>
        </div>
    );
};

export default modules;
