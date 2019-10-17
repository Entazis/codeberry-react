import React, {useState} from 'react';
import {
    Accordion,
    Card
} from 'react-bootstrap';

import {lessons} from './lessons';
import classes from './Navigation.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';
import Modules from './Modules/Modules';

const Navigation = () => {
    const [modules] = useState(lessons);
    const [selected] = useState({
        moduleId: 'html-basics',
        chapterId: 'reminy',
        lessonId: '0'
    });

    const selectedModule = modules.find(module => module.id === selected.moduleId);
    const selectedChapter = selectedModule.chapters.find(chapter => chapter.id === selected.chapterId);
    //const selectedLesson = selectedChapter.lessons.find(lesson => lesson.id === selected.lessonId);

    const windowSize = useWindowSize();

    const controllerClasses = [classes.Controller];
    const thumbnailClasses = [classes.Thumbnail];
    if (windowSize.width < 1360) {
        controllerClasses.push(classes.ControllerBottom);
    }

    return (
        <div className={controllerClasses.join(' ')}>
            <Accordion as={Card} defaultActiveKey='0'>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    <div className={classes.ControllerHeader}>
                        <div className={classes.Titles}>
                            <h1 className={classes.ModuleTitle} title={selectedModule.title}>{selectedModule.title} <small className="text-muted">({selectedModule.progress})</small></h1>
                            <p className={classes.chapterTitle}>{selectedChapter.title}</p>
                        </div>
                        <div className={thumbnailClasses.join(' ')}>
                            <img src="/logo192.png" alt="Project thumbnail" className={classes.ThumbnailImg} />
                        </div>
                    </div>
                </Accordion.Toggle>

                <Accordion.Collapse as={Card.Body} eventKey="1">
                    <div className={classes.ControllerBody}>
                        <Modules modules={modules}/>
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
};

export default Navigation;
