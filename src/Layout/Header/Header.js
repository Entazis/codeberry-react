import React
    from 'react';
import { Navbar, Nav, NavDropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Header.module.css';
import OnBoardingPanel from './OnboardingPanel/OnBoardingPanel';

const header = (props) => {
    return (
        <header className={classes.HeaderFixedTop}>
            <Navbar
                expand="lg">
                <Navbar.Brand href="/"><img
                    alt="Logo"
                    src="/images/logo/logo-60x60.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="fixed-navbar-nav" />
                <Navbar.Collapse id="fixed-navbar-nav">
                    <Nav className="mr-auto navigation" >
                        <Nav.Link href="/service/slack/invite/en-US">Community</Nav.Link>
                        <NavDropdown title="Admin menu" id="admin-nav-dropdown">
                            <NavDropdown.Item href="/user/search">Students</NavDropdown.Item>
                            <NavDropdown.Item href="/curriculum-repository/projects">Lessons</NavDropdown.Item>
                            <NavDropdown.Item href="/curriculum-repository/concepts">Concepts</NavDropdown.Item>
                            <NavDropdown.Item href="/reference">Reference</NavDropdown.Item>
                            <NavDropdown.Item href="/stats">Statistics</NavDropdown.Item>
                            <NavDropdown.Item href="/curriculum-repository/processes">Curriculum i18n tools</NavDropdown.Item>
                            <NavDropdown.Item href="/i18n/processes">Framework i18n tools</NavDropdown.Item>
                            <NavDropdown.Item href="/test-tools">Test tools</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-sm-2">
                        <Nav.Link
                            href="/user/referral">
                            <img
                                alt="Gift"
                                className={classes.GiftImg}
                                src="/images/referral-icon.png" />
                        </Nav.Link>
                        <Nav.Link>
                            <NavDropdown
                                alignRight
                                title={props.user.userInitials}
                                className={classes.UserMenu}
                                id="user-nav-dropdown">
                                <NavDropdown.Item href="/user/search"><OnBoardingPanel /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/user/profile"><FontAwesomeIcon icon={faUser} /> Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/auth/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default header;