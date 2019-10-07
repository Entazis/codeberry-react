import React
    from 'react';
import classes from './Layout.module.css';
import Navbar
    from '../Navbar/Navbar';


const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <header>
                <Navbar />
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default layout;