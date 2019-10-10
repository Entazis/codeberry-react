import React
    from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

import classes from './OnBoardingPanel.module.css';

const onBoardingPanel = () => {
    return (
        <div className={classes.OnBoardingPanel}>
            <div className={classes.AlertBadge}>
                <Badge pill variant="danger">1</Badge>
            </div>
            <div className={classes.Points}>
                <Badge variant="success">100 points</Badge>
            </div>
            <p><strong>Level up:</strong></p>
            <div className={classes.ProgressBar}>
                <div className={classes.ProgressLevel}>
                </div>
            </div>
            <ListGroup>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faCheckSquare} /> Submit your first assignment.
                    <div className={classes.Points}><Badge variant="secondary">10 points</Badge></div></ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faCheckSquare} /> Submit at least five assignments.
                    <div className={classes.Points}><Badge variant="secondary">20 points</Badge></div></ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faCheckSquare} /> Register to the community.
                    <div className={classes.Points}><Badge variant="secondary">30 points</Badge></div></ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faCheckSquare} /> Finish your first project.
                    <div className={classes.Points}><Badge variant="secondary">40 points</Badge></div></ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faSquare} /> Invite a friend.
                    <div className={classes.Points}><Badge variant="secondary">50 points</Badge></div></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default onBoardingPanel;
