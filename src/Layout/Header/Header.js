import React
    from 'react';
import { Link } from 'react-router-dom';
import {
    Container
} from 'react-bootstrap';

import classes from './Header.module.css';

const header = () => {
    return (
        <header className={classes.HeaderFixedTop}>
                <Container fluid>
                    <div className={classes.NavbarHeader}>
                        <Link to="/"><img
                            alt="Logo"
                            className={[classes.LogoImg, classes.ImgResponsive].join(' ')}
                            src="/images/logo/logo-60x60.png" /></Link>
                    </div>
                    <div className={classes.NavbarCollapse}>
                        <ul className={classes.NavbarLeft}>
                            <li>
                                <a className="a-navbar"
                                   href="/service/slack/invite/en-US"
                                   target="_blank">Community</a>
                            </li>
                            <li className="dropdown">
                                <a href="#"
                                   className="dropdown-toggle a-navbar"
                                   data-toggle="dropdown"
                                   aria-expanded="false">Admin menu <span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/user/search">Students</a>
                                    </li>
                                    <li>
                                        <a href="/curriculum-repository/projects">Lessons</a>
                                    </li>
                                    <li>
                                        <a href="/curriculum-repository/concepts">Concepts</a>
                                    </li>
                                    <li>
                                        <a href="/reference">Reference</a>
                                    </li>
                                    <li>
                                        <a href="/stats">Statistics</a>
                                    </li>
                                    <li>
                                        <a href="/curriculum-repository/processes">Curriculum i18n tools</a>
                                    </li>
                                    <li>
                                        <a href="/i18n/processes">Framework i18n tools</a>
                                    </li>
                                    <li>
                                        <a href="/test-tools">Test tools</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/user/referral"
                                   className="a-navbar"><img
                                    alt="Gift"
                                    className="navbar-link-img"
                                    src="/images/referral-icon.png" />
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="dropdown-toggle a-navbar"
                                   data-toggle="dropdown"
                                   aria-expanded="false">
                                    <div
                                        className="user-menu-content">
                                        <span
                                            className="initials">XX</span>
                                        <span
                                            className="alert-badge">1</span>
                                    </div>
                                    <span
                                        className="caret user-menu-caret">.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
        </header>
    );
};

export default header;