import React
    from 'react';
import {Link} from 'react-router-dom';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import {useAuth} from '../../hooks/useAuth';

const Footer = (props) => {
    const auth = useAuth();

    const classList = [classes.Footer];
    if (props.isLessonsOnMobile) {
        classList.push(classes.FooterUp);
    }

    return (
        <footer className={classList.join(' ')}>
            <Link to="/"><img
                alt="Logo"
                className={[classes.LogoImg, classes.ImgResponsive].join(' ')}
                src="/images/logo/logo-60x60.png" /></Link>
            <Link to="https://codeberryschool.com">CodeBerry Programming School © 2019</Link>
            <ul className={classes.LanguageSelector}>
                <li className={classes.DropUp}>
                    <Link className="a-navbar dropdown-toggle"
                       to="/"
                       data-toggle="dropdown">
                        <FontAwesomeIcon icon={faFlagUsa} /><span className="caret" /></Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/"><FontAwesomeIcon icon={faFlagUsa} /> English
                                <form
                                    id="setLang-en-US"
                                    action="/i18n/setlocale"
                                    method="POST">
                                    <input
                                        type="hidden"
                                        name="locale"
                                        value="en-US" />
                                </form>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            {auth.user ? <span className="text-muted"><small>- You are an admin</small></span> : null}
        </footer>
    );
};

export default Footer;
