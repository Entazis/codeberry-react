import React
    from 'react';
import { Link } from 'react-router-dom';
import {
    Container
} from 'react-bootstrap';

import classes from './Header.module.css';

const header = () => {
    return (
        <header  className={classes.HeaderFixedTop}>
            <nav>
                <Container fluid>
                    <div className={classes.NavbarHeader}>
                        <Link to="/"><img
                            alt="Logo"
                            className={[classes.LogoImg, classes.ImgResponsive].join(' ')}
                            src="/images/logo/logo-60x60.png" /></Link>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default header;