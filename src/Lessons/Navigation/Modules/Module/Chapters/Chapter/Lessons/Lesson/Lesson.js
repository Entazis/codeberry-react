import React
    from 'react';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const lesson = (props) => {
    return (
        <Card>
            <NavLink to='/lessons'>
                {props.title}
            </NavLink>
        </Card>
    );
};

export default lesson;
