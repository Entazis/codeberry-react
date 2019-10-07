import React
    from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <nav className={classes.NavbarFixedTop}>
            <div className={classes.NavbarContainerFluid}>
                <div className={classes.NavbarHeader}>
                    <div className={classes.NavbarContainerFluid}>
                        <a href="/"><img
                            alt="Logo"
                            className={[classes.LogoImg, classes.ImgResponsive].join(' ')}
                            src="/images/logo/logo-60x60.png" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
