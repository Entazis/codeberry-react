import React from 'react';

import classes from './Modules.module.css';
import Module from './Module/Module';

const modules = (props) => {
    const moduleList = props.modules.map((module, index) =>
        <Module
            id={module.id}
            title={module.title}
            chapters={module.chapters}
            index={index} />);

    return (
        <div className={classes.Modules}>
            {moduleList}
        </div>
    );
};

export default modules;
