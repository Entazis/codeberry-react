import React, {useState} from 'react';
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
import classesAuth
    from '../Auth.module.css';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <React.Fragment>
            <div className={classesAuth.LinerContainer}>
                <h5 className={classesAuth.Liner}> Or log in with your email address </h5>
            </div>
            <form
                action="/lessons">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="email"
                            name="email"
                            placeholder="my@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            name="password"
                            placeholder="MyPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </InputGroup>
                </FormGroup>

                <Button onClick={() => props.signIn(email, password)} variant={"primary"} className={[classes.btnBlock, classes.btnPrimary].join(' ')}>
                    {isSignIn ? 'Log in' : 'Sign up'} <FontAwesomeIcon icon={faSignInAlt} />
                </Button>
            </form>
            {isSignIn ? (
                <p className="text-right text-muted">
                    <small><a href="/auth/password-reset">Forgot your password?</a></small>
                </p>
            ) : null}
            <p className="text-muted">
                <small>
                    {isSignIn ? 'Don\'t have an account? ' : 'Already have an account? '}
                    <button
                        className={classes.AuthSwitchButton}
                        onClick={() => setIsSignIn(!isSignIn)}>
                        {isSignIn ? 'Sign up now' : 'Log in now.'}
                    </button>!
                </small>
            </p>
            {!isSignIn ? (
                <p className="text-right text-muted">
                    <small><a href="/auth/password-reset">Or forgot your password?</a></small>
                </p>
            ) : null}
        </React.Fragment>
    );
};

export default LoginForm;
