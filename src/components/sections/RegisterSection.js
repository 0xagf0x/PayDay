import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from '../elements/Image';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}



const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Cta = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {

    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split'
    );

    const [value, setValue] = React.useState()

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container login-container flex-column align justify-center mb120">
                <div className="flex background-overlay">
                    <Image
                        src={require('./../../assets/images/login.svg')}
                        alt="Features split 02"
                        width={1028}
                        height={896} />
                </div>
                <div
                    className="cta-inner section-inner br"
                >
                

                    <div className="cta-slogan">
                        <h3 className="m-0 center">
                            Register
                        </h3>
                    </div>

                    <div className="cta-action">
                        <div className="flex mb20 flex-column">
                            <p className="tc m0 mb1">Welcome!</p>
                            <p className="m0 mb1">I am...</p>
                            <div className="flex space-between">
                                <Button tag="a" className="bk-grey w48 register-btn" wideMobile href="#">
                                    Seeking work
                                </Button>
                                <Button tag="a" className="bk-grey w48 register-btn" wideMobile href="#">
                                    Offering work
                                </Button>

                                

                            </div>
                            
                        </div>

                        <Input className="mb20" id="email" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Email"></Input>
                        <Input className="mb20" id="password" type="password" label="Subscribe" labelHidden hasIcon="right" placeholder="Password"></Input>
                        <PhoneInput
                            placeholder="Phone Number"
                            id="phoneNumber"
                            className="mb20" 
                            defaultCountry="US"
                            value={value}
                            onChange={setValue} 
                        />
                        <Input className="mb20" id="address" type="address" label="Subscribe" labelHidden hasIcon="right" placeholder="Address"></Input>
                        <Input className="mb20" id="zipcode" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="Zipcode"></Input>
                        <Input className="mb40" id="state" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="State"></Input>
                    </div>
                   
                    <Button tag="a" className="bk-grey w100" wideMobile href="#" disabled>
                        Sign Up
                    </Button>
                </div>
            </div>
        </section>
    );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;