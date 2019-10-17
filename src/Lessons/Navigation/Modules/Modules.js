import React from 'react';

import classes from './Modules.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Chapters from './Chapters/Chapters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const modules = (props) => {
    const moduleList = props.modules.map((module, index) =>
        {
            return (
                <div className={classes.Module}>
                    <Accordion as={Card} defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={'m' + index}>
                            <div className={classes.ModuleHeader}>
                                <img className={classes.ModuleThumbnail}
                                     src="/logo192.png"
                                     alt="Module thumbnail" />
                                <span className={classes.ModuleTitle}>{module.title}</span>
                                {module.progress === '100%' ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className={classes.ProgressDoneRight} />
                                ) : (
                                    <span className={classes.ProgressRight} title="Module status">{module.progress}</span>
                                )}
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse as={Card.Body} eventKey={'m' + index}>
                            <div className={classes.ModuleBody}>
                                <Chapters chapters={module.chapters}/>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            )
        }
    );

    return (
        <React.Fragment>
            {moduleList}
        </React.Fragment>
    );
};

export default modules;
