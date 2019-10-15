import React from 'react';

import classes from './SubmissionForm.module.css';

const submissionForm = () => {
    return (
        <form
            className={classes.SubmissionForm}
            id="submit-form"
            name="submit-form"
            method="POST">
            <input
                id="submission"
                type="hidden"
                name="submission"
                value="" />
                <input
                    id="is-skipped"
                    type="hidden"
                    name="is_skipped"
                    value="false" />
                    <button
                        id="next-button"
                        name="next-button"
                        className="btn btn-primary center-block">
                        Next
                    </button>
        </form>
    );
};

export default submissionForm;
