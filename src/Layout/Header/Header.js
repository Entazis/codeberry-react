import React
    from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';

import classes from './Header.module.css';
import OnBoardingPanel from './OnboardingPanel/OnBoardingPanel';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const auth = useAuth();

    return (
        <header className={classes.HeaderFixedTop}>
            <Navbar
                expand="lg">
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            alt="Logo"
                            src="/images/logo/logo-60x60.png" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="fixed-navbar-nav" />
                {auth.user ? (
                    <Navbar.Collapse id="fixed-navbar-nav">
                        <Nav className="mr-auto navigation" >
                            <Nav.Link to="/service/slack/invite/en-US">Community</Nav.Link>
                            {auth.userData.isAdmin ? (
                                <NavDropdown title="Admin menu" id="admin-nav-dropdown">
                                    <LinkContainer to='/user/search'>
                                        <NavDropdown.Item>Students</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer  to='/curriculum-repository/projects'>
                                        <NavDropdown.Item>Lessons</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/curriculum-repository/concepts'>
                                        <NavDropdown.Item>Concepts</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/reference'>
                                        <NavDropdown.Item>Reference</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/stats'>
                                        <NavDropdown.Item>Statistics</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer  to='/curriculum-repository/processes'>
                                        <NavDropdown.Item>Curriculum i18n tools</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer  to='/i18n/processes'>
                                        <NavDropdown.Item>Framework i18n tools</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/test-tools'>
                                        <NavDropdown.Item>Test tools</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            ) : null}
                        </Nav>
                        <Nav className="mr-sm-2">
                            <NavLink
                                to="/user/referral">
                                <img
                                    alt="Gift"
                                    className={classes.GiftImg}
                                    src="/images/referral-icon.png" />
                            </NavLink>
                            <NavDropdown
                                alignRight
                                title={(auth.user) ? auth.userData.userInitials : ''}
                                className={classes.UserMenu}
                                id="user-nav-dropdown">
                                <NavDropdown.Item><OnBoardingPanel /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <LinkContainer to='/user/profile'>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faUser} /> Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/auth/logout'>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                ) : null}
            </Navbar>
        </header>
    );
};

export default Header;