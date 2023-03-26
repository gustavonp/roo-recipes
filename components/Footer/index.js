import * as React from 'react';
import { FooterWrapper } from './lib/styled';
import Logo from '../../utils/logo';

const Footer = () => {

  return (
    <FooterWrapper>
      <Logo width='130px' />
      <p>Bon Appétit</p>
    </FooterWrapper>
  )
};

export default Footer;