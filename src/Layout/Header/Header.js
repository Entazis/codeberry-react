import React
    from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
                                    <NavDropdown.Item><Link to='/user/search'>Students</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/curriculum-repository/projects'>Lessons</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/curriculum-repository/concepts'>Concepts</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/reference'>Reference</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/stats'>Statistics</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/curriculum-repository/processes'>Curriculum i18n tools</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/i18n/processes'>Framework i18n tools</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/test-tools'>Test tools</Link></NavDropdown.Item>
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
                                <NavDropdown.Item>
                                    <Link to='/user/profile'><FontAwesomeIcon icon={faUser} /> Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/auth/logout'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                ) : null}
            </Navbar>
        </header>
    );
};

export default Header;