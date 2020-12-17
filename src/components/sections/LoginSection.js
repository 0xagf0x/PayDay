import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from '../elements/Image';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container login-container flex-column align  justify-center mb120">
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
              Login
              </h3>
          </div>
          <div className="cta-action">
            <Input className="mb40" id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Email"></Input>
            <Input className="mb40" id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Password"></Input>
          </div>
          <Button tag="a" className="bk-grey w100 register-btn" wideMobile href="#">
            Log in
          </Button>
          <p className="text-small center">Dont have an account? <a className="text-dark" href="/register">Register</a></p>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;