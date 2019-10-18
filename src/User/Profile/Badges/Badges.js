import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

import classes from './Badges.module.css';

const badges = () => {
    const unlockedBadgeList = (
        <React.Fragment>
            <div className={[classes.BadgeBox, classes.BadgeBoxUnlocked].join(' ')}>
                <Row>
                    <Col md={3}>
                        <img
                            src="/logo192.png"
                            className={classes.BadgeImgUnlocked}
                            alt="Badge"/>
                    </Col>
                    <Col md={9}>
                        <div className={classes.BadgeBoxText}>
                            <div className={classes.BadgeName}>Night Owl</div>
                            <div className={classes.BadgeTask}>Submit at least 10 assignments between 10 PM and 3 AM</div>
                            <div className={[classes.BadgeFlavor].join(' ')}>Pulling an all-nighter? You run on caffeine and code, don't you?</div>
                        </div>
                    </Col>
                    <div className={classes.BadgeProgress}>10 / 10</div>
                </Row>
            </div>
            <div className={[classes.BadgeBox, classes.BadgeBoxUnlocked, classes.BadgeBoxClicked].join(' ')}>
                <Row>
                    <Col md={3}>
                        <img
                            src="/logo192.png"
                            className={classes.BadgeImgUnlocked}
                            alt="Badge"/>
                    </Col>
                    <Col md={9}>
                        <div className={classes.BadgeBoxText}>
                            <div className={classes.BadgeName}>Early Bird</div>
                            <div className={classes.BadgeTask}>Submit at least 10 assignments between 3AM and 7AM</div>
                            <div className={[classes.BadgeFlavor, classes.BadgeFlavorShow].join(' ')}>Gets the worm. Or maybe this sweet badge.</div>
                        </div>
                    </Col>
                    <div className={classes.BadgeProgress}>10 / 10</div>
                </Row>
            </div>
        </React.Fragment>
    );

    const inProgressBadgeList = (
        <React.Fragment>
            <div className={[classes.BadgeBox, classes.BadgeBoxInProgress].join(' ')}>
                <Row>
                    <Col md={3}>
                        <img
                            src="/logo192.png"
                            className={classes.BadgeImgInProgress}
                            alt="Badge"/>
                    </Col>
                    <Col md={9}>
                        <div className={classes.BadgeBoxText}>
                            <div className={classes.BadgeName}>Persistent</div>
                            <div className={classes.BadgeTask}>Study for 3 days in a row</div>
                            <div className={classes.BadgeFlavor}>You learned for three days straight. Not bad!</div>
                        </div>
                    </Col>
                    <div className={classes.BadgeProgress}>0 / 3</div>
                </Row>
            </div>
        </React.Fragment>
    );

    return (
        <Row id="badges">
            <Col md={12}>
                <h3>Unlocked badges</h3>
                {unlockedBadgeList}
                <h3>Badges in progress</h3>
                {inProgressBadgeList}
            </Col>
        </Row>
    );
};

export default badges;
