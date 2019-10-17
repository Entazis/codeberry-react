import React, {useState} from 'react';
import {
    Accordion,
    Button,
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
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="h1">
                            <div className={classes.Titles}>
                                <h1 className={classes.ModuleTitle} title={selectedModule.title}>{selectedModule.title} <small className="text-muted">({selectedModule.progress})</small></h1>
                                <p className={classes.chapterTitle}>{selectedChapter.title}</p>
                            </div>
                            <div className={thumbnailClasses.join(' ')}>
                                <img src="/logo192.png" alt="Project thumbnail" className={classes.ThumbnailImg} />
                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="h1">
                        <Card.Body>
                            <Modules modules={modules}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Navigation;
