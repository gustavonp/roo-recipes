import * as React from 'react';
import { useRouter } from 'next/router';
import { HeaderWrapper } from './lib/styled';
import Logo from '../../utils/logo';
import Wave from './lib/Wave';

const Header = (props) => {
  // const pageTitle = !!document ? document.title : '';

  return (
    <HeaderWrapper>
      <div className="top">
        <div className="left">
          <Logo />
          {/* <h1>{pageTitle}</h1> */}
        </div>
        <div className="right">
          <img src="/images/chefroo.png" alt="Aniki" height="328px" />
        </div>
      </div>
      <div className="bottom">
        <Wave />
      </div>
    </HeaderWrapper>
  )
};

export default Header;
