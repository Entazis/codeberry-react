import React
    from 'react';
import classes from './Layout.module.css';
import Navbar
    from '../Navbar/Navbar';


const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Navbar />
            {props.children}
        </div>
    );
};

export default layout;
