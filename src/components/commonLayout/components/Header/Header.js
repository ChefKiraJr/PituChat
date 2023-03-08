import React from 'react';
import './header.css';
import appLogo from '../../../../assets/images/appLogo.png';
import userAvatar from '../../../../assets/images/userAvatar.png';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content">
        <img src={appLogo} alt="app-logo" />
        <div className="header__user">
          <img src={userAvatar} alt="user-avatar" />
          <ChevronDownIcon fontSize="20px" color="#4d4d4d" />
        </div>
      </div>
    </div>
  );
};

export default Header;
