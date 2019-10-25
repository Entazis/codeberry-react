import React from 'react';
import {
    Accordion,
    Card
} from 'react-bootstrap';

import {modules} from './lessons';
import classes from './Navigation.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';
import Modules from './Modules/Modules';

const Navigation = (props) => {
    console.log('Navigation!');
    console.log(props.projectMap);

    const selected = {
        moduleId: 'html-basics',
        chapterId: 'reminy',
        lessonId: '0'
    };

    const selectedModule = modules.find(module => module.id === selected.moduleId);
    const selectedChapter = selectedModule.chapters.find(chapter => chapter.id === selected.chapterId);
    //const selectedLesson = selectedChapter.lessons.find(lesson => lesson.id === selected.lessonId);

    const windowSize = useWindowSize();

    const controllerClasses = [classes.Controller];
    const controllerHeaderClasses =[classes.ControllerHeader];
    const thumbnailClasses = [classes.Thumbnail];
    if (windowSize.width >= 1360) {
        controllerClasses.push(classes.ControllerDesktop);
        controllerHeaderClasses.push(classes.ControllerHeaderDesktop);
        thumbnailClasses.push(classes.ThumbnailDesktop);
    }

    return (
        <div className={controllerClasses.join(' ')}>
            <Accordion as={Card} defaultActiveKey='0'>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    <div className={controllerHeaderClasses.join(' ')}>
                        <div className={thumbnailClasses.join(' ')}>
                            <img src="/logo192.png" alt="Project thumbnail" className={classes.ThumbnailImg} />
                        </div>
                        <div className={classes.Titles}>
                            <h1 className={classes.ModuleTitle} title={selectedModule.title}>{selectedModule.title} <small className="text-muted">({selectedModule.progress})</small></h1>
                            <p className={classes.chapterTitle}>{selectedChapter.title}</p>
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse as={Card.Body} eventKey="1">
                    <div className={classes.ControllerBody}>
                        <Modules projectMap={props.projectMap ? props.projectMap : []}/>
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
};

export default Navigation;
