import React
    from 'react';
import { Badge } from 'react-bootstrap';

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
                <div
                    className={classes.ProgressLevel}
                    role={'progressbar'}
                    aria-valuenow={67}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                </div>
            </div>

        </div>
    );
};

export default onBoardingPanel;
