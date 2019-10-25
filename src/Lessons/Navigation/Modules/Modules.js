import React from 'react';

import classes from './Modules.module.css';
import {Accordion, Card} from 'react-bootstrap';
import Chapters from './Chapters/Chapters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const modules = (props) => {
    const moduleList = props.projectMap.map((module, index) =>
        {
            const headerClasses = [classes.ModuleHeader];
            if (module.progress === '100%') {
                headerClasses.push(classes.Finished);
            }

            return (
                <div className={classes.Module} key={index}>
                    <Accordion as={Card} defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={'m' + index}>
                            <div className={headerClasses.join(' ')}>
                                <img className={classes.ModuleThumbnail}
                                     src="/logo192.png"
                                     alt="Module thumbnail" />
                                <span className={classes.ModuleTitle}>{module.title}</span>
                                {module.isFinished ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className={classes.ProgressDoneRight} />
                                ) : (
                                    <span className={classes.ProgressRight} title="Module status">{module.progress}</span>
                                )}
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse as={Card.Body} eventKey={'m' + index}>
                            <div className={classes.ModuleBody}>
                                <Chapters chapters={module.lessons}/>
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
