import React
    from 'react';
import {
    Button,
    FormControl,
    FormGroup,
    InputGroup
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLock,
    faSignInAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import classes
    from './LoginForm.module.css';

const loginForm = (props) => {
    return (
        <React.Fragment>
            <form
                action={'/lessons'}>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type={'email'}
                            name={'email'}
                            placeholder={'my@email.com'} />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type={'password'}
                            name={'password'}
                            placeholder={'MyPassword'} />
                    </InputGroup>
                </FormGroup>

                <Button onClick={props.signedIn} variant={'primary'} className={[classes.btnBlock, classes.btnPrimary].join(' ')}>Log in <FontAwesomeIcon icon={faSignInAlt} /></Button>
            </form>
            <p className={'text-right text-muted'}>
                <small><a href={'/auth/password-reset'}>Forgot your password?</a></small>
            </p>
            <p className={'text-muted'}>
                <small>Don't have an account? <a href={'/auth/signup'}> Sign up now</a>!</small>
            </p>
        </React.Fragment>
    );
};

export default loginForm;
