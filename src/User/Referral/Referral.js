import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faDollarSign, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookMessenger, faTwitter} from '@fortawesome/free-brands-svg-icons';

import classes from './Referral.module.css';
import {Container, Row, Col, InputGroup} from 'react-bootstrap';

const referral = () => {
    return (
        <div className={classes.Referral}>
            <div className={[classes.ReferralHead, classes.VerticalPadding].join(' ')}>
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <h1>We can give you a $15.00 discount for each of your friends!</h1>
                            <p><strong>Invite your friends to CodeBerry. We give discounts for both of you.</strong></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={classes.VerticalPadding}>
                <Container>
                    <div className={classes.TopBuffer}>
                        <Row>
                            <Col md={3}>
                                <Row>
                                    <Col md={12}>
                                        <FontAwesomeIcon icon={faUsers} size={'3x'}/>
                                        <p className={classes.TopBuffer}>
                                            <strong>
                                                $15.00 discount for your friends
                                            </strong>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col md={12}>
                                        <FontAwesomeIcon icon={faDollarSign} size={'3x'}/>
                                        <p className={classes.TopBuffer}>
                                            <strong>
                                                $1.50 discount for you on each signup
                                            </strong>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col md={12}>
                                        <FontAwesomeIcon icon={faDollarSign} size={'3x'}/>
                                        <FontAwesomeIcon icon={faDollarSign} size={'3x'}/>
                                        <FontAwesomeIcon icon={faDollarSign} size={'3x'}/>
                                        <p className={classes.TopBuffer}>
                                            <strong>
                                                $15.00 discount for you for each subscriber
                                            </strong>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col md={12}>
                                        <FontAwesomeIcon icon={faShoppingCart} size={'3x'}/>
                                        <p className={classes.TopBuffer}>
                                            <strong>
                                                You can redeem your credits
                                            </strong>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={3}>
                            <p>
                                <small>
                                    Your friends can subscribe at a lower price if they arrive to CodeBerry via your link.
                                </small>
                            </p>
                        </Col>
                        <Col md={3}>
                            <p>
                                <small>
                                    For each of your friends who signs up with your link you’ll get a $1.50 reward
                                </small>
                            </p>
                        </Col>
                        <Col md={3}>
                            <p>
                                <small>
                                    For each of your friends who subscribes with your link you’ll get a $15.00 reward.
                                </small>
                            </p>
                        </Col>
                        <Col md={3}>
                            <p>
                                <small>
                                    You can use your CodeBerry credits to pay for your subscription.
                                    Invite enough of your friends and you can learn for free.
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={classes.BgAlt}>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col md={12}>
                                    <h3>Share with your friends</h3>
                                </Col>
                            </Row>
                            <div className={classes.VerticalPadding}>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={11}>
                                                <p>Send your unique link:</p>
                                                <InputGroup>
                                                    <input title="unique-link" id="unique-link" className="form-control" value="https://codeberryschool.com/en/ren/?r=cd807-b6585" readOnly=""/>
                                                    <div className={classes.InputGroupBtn}>
                                                        <button className="btn-copy btn btn-default" data-clipboard-target="#unique-link" data-toggle="tooltip" data-placement="bottom" title="" data-ga-event="Copied referral link" data-original-title="Copy to clipboard">
                                                            Copy
                                                        </button>
                                                    </div>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <div className={classes.TopBuffer}>
                                            <Row>
                                                <Col md={12}>
                                                    <p>Or share on the internet:</p>
                                                    <Row>
                                                        <Col md={6}>
                                                            <a className="btn btn-sm btn-block btn-social btn-referral btn-facebook btn-facebook-share"
                                                               href="https://codeberryschool.com/en/ren/?r=cd807-b6585"
                                                               data-quote="Want to learn programming the fun way? This site uses baby elephants and cats to explain coding. If you sign up with this link, we’ll both get $15.00 discount from them."
                                                               data-ga-event="Pressed Facebook button on Referral page">
                                                                <FontAwesomeIcon icon={faFacebook}/> Facebook
                                                            </a>
                                                        </Col>
                                                        <Col md={6}>
                                                            <a className="btn btn-sm btn-block btn-social btn-referral btn-facebook-messenger btn-facebook-send"
                                                               href="https://codeberryschool.com/en/ren/?r=cd807-b6585"
                                                               data-title="I learn programming"
                                                               data-ga-event="Pressed Messenger button on Referral page">
                                                                <FontAwesomeIcon icon={faFacebookMessenger}/> Messenger
                                                            </a>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={6}>
                                                            <a className="btn btn-google btn-sm btn-block"
                                                               href="mailto:?Subject=I%20learn%20programming&amp;Body=Hi,%20I'm%20learning%20how%20to%20code%20and%20the%20site%20that%20I%20use%20has%20this%20nifty%20promotion.%0A%0AIf%20you%20sign%20up%20using%20my%20link,%20we'll%20both%20get%20a%20discount%20of%20$15.00%20from%20the%20monthly%20subscription%20fee.%0A%0AHere%20is%20my%20link:%0Ahttps://codeberryschool.com/en/ren/?r=cd807-b6585%0A%0AIt'd%20be%20awesome%20if%20you%20could%20check%20it%20out.%0AI%20really%20think%20you%20would%20like%20it.%20I,%20myself%20enjoy%20it%20very%20much."
                                                               target="_blank"
                                                               rel="noopener noreferrer"
                                                               data-ga-event="Pressed Email button on Referral page">
                                                                Email
                                                            </a>
                                                        </Col>
                                                        <Col md={6}>
                                                            <a className="btn btn-sm btn-block btn-social btn-referral btn-twitter"
                                                               href="https://twitter.com/intent/tweet?url=https://codeberryschool.com/en/ren/?r=cd807-b6585&amp;text=Want%20to%20learn%20programming%20the%20fun%20way?%20This%20site%20uses%20baby%20elephants%20and%20cats%20to%20explain%20coding.%20If%20you%20sign%20up%20with%20this%20link,%20we%E2%80%99ll%20both%20get%20$15.00%20discount%20from%20them:"
                                                               target="_blank"
                                                               rel="noopener noreferrer"
                                                               data-ga-event="Pressed Twitter button on Referral page">
                                                                <FontAwesomeIcon icon={faTwitter}/> Twitter
                                                            </a>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <p>
                                                                <small className="text-muted">
                                                                    (You'll be able to edit the message before sending it)
                                                                </small>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={12}>
                                                <p>Have absolutely no idea what to write? Let us help with that:</p>
                                                <textarea
                                                    title="social-message"
                                                    id="social-message"
                                                    className="form-control"
                                                    rows="5"
                                                    data-clipboard-target="#social-message"
                                                    readOnly="">Want to learn programming the fun way? This site uses baby elephants and cats to explain coding. If you sign up with this link, we’ll both get $15.00 discount from them: https://codeberryschool.com/en/ren/?r=cd807-b6585</textarea>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={6}>
                                <p>
                                    <span className={classes.ReferralCounter}>0</span> signup(s)
                                </p>
                                <p>
                                    <span className={classes.ReferralCounter}>0</span> subscriber(s)
                                </p>
                                <p>
                                    <span className={classes.ReferralCounter}>0 Ft</span> remaining discount
                                </p>

                            </Col>
                            <Col md={6}>
                                <p><strong>How can I use my credits?</strong></p>
                                <p>Just send an email to <a href="mailto:hello@codeberryschool.com">hello@codeberryschool.com</a> and our customer support will help you pay with your credits.</p>
                                <hr/>
                                <p><strong>Can I use my unique link in a blog post?</strong></p>
                                <p>Sure thing, use your link wherever you'd like to.</p>
                                <hr/>
                                <p><strong>What qualifies as a "signup"?</strong></p>
                                <p>We consider it a "signup" when a user confirms their email address.</p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default referral;
