import React, {useState} from 'react';

import classes from './Navigation.module.css';
import {useWindowSize} from '../../hooks/useWindowSize';
import Modules from './Modules/Modules';
import {
    Accordion,
    Button,
    Card
} from 'react-bootstrap';

const Navigation = () => {
    const [modules] = useState([
        {
            id: 'html-basics',
            title: 'HTML Basics',
            progress: '23%',
            chapters: [
                {
                    id: 'reminy',
                    title: 'Introduction',
                    lessons: [
                        {
                            id: '0',
                            title: 'How to use this project',
                            finished: true
                        },
                        {
                            id: '1',
                            title: 'What is HTML?',
                            finished: true
                        },
                        {
                            id: '2',
                            title: 'An HTML document',
                            finished: true
                        },
                        {
                            id: '3',
                            title: 'An HTML tag',
                            finished: false
                        },
                        {
                            id: '4',
                            title: 'Writing HTML',
                            finished: false
                        }
                    ]
                },
                {
                    id: 'zionys',
                    title: 'Basic tags',
                    lessons: [
                        {
                            id: '0',
                            title: 'Headings',
                            finished: false
                        },
                        {
                            id: '1',
                            title: 'Paragraphs',
                            finished: false
                        },
                        {
                            id: '2',
                            title: 'Links',
                            finished: false
                        },
                        {
                            id: '3',
                            title: 'Images',
                            finished: false
                        },
                        {
                            id: '4',
                            title: 'Special meaning',
                            finished: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'css-basics',
            title: 'Css Basics',
            progress: '0%',
            chapters: [
                {
                    id: 'zukova',
                    title: 'Introduction',
                    lessons: [
                        {
                            id: '0',
                            title: 'How to use this project',
                            finished: false
                        },
                        {
                            id: '1',
                            title: 'What is CSS?',
                            finished: false
                        },
                        {
                            id: '2',
                            title: 'Where to write CSS?',
                            finished: false
                        },
                        {
                            id: '3',
                            title: 'A CSS expression',
                            finished: false
                        },
                        {
                            id: '4',
                            title: 'Selectors',
                            finished: false
                        },
                        {
                            id: '5',
                            title: 'Validation',
                            finished: false
                        }
                    ]
                }
            ]
        }
        ]);

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
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <div className={classes.Titles}>
                                <h1 className={classes.ModuleTitle} title={selectedModule.title}>{selectedModule.title} <small className="text-muted">({selectedModule.progress})</small></h1>
                                <p className={classes.chapterTitle}>{selectedChapter.title}</p>
                            </div>
                            <div className={thumbnailClasses.join(' ')}>
                                <img src="/logo192.png" alt="Project thumbnail" className={classes.ThumbnailImg} />
                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Accordion defaultActiveKey="0">
                                <Modules modules={modules}/>
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Navigation;
