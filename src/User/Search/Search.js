import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.css';

const search = () => {
    return (
        <div
            className="content">
            <br/>
                <div
                    className={classes.Content}>
                    <div
                        className="panel-body">
                        <form
                            id="searchQueryForm"
                            className="form-horizontal">
                            <div
                                className="input-group input-group-sm">
                                <span
                                    className="input-group-addon"
                                    id="basic-addon1"><FontAwesomeIcon icon={faUser}/></span>
                                <input
                                    id="searchQuery"
                                    type="text"
                                    name="searchQuery"
                                    className="form-control ui-autocomplete-input"
                                    placeholder="Type user name or email to start search"
                                    aria-describedby="basic-addon1"
                                    autoComplete="off"/>
                                    <input
                                        id="email"
                                        type="hidden"
                                        name="email"/>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default search;
