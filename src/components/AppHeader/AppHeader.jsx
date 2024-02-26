

import React from 'react';
import Logo from '@/assets/spa-logo.png';
import './AppHeader.scss';

const AppHeader = () => (
  <div className="app-header">
    <img src={Logo} alt="Hotel Logo" className="app-header__logo" />
  </div>
);

export default AppHeader;
//nazanin 