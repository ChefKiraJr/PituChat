import React from 'react';
import './sidebar.css';
import { ChatIcon, ShopIcon, LogoutIcon } from './Dummy';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ page }) => {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container">
      <div className="sidebar__menu">
        <div
          className={
            page === 'chat' ? 'sidebar-menu__active' : 'sidebar-menu__option'
          }
          onClick={() => navigate('/chat')}
        >
          <ChatIcon />
          <p>Chat</p>
        </div>
        <div
          className={
            page === 'shop' ? 'sidebar-menu__active' : 'sidebar-menu__option'
          }
          onClick={() => navigate('/shop')}
        >
          <ShopIcon />
          <p>Toko</p>
        </div>
      </div>
      <div className="sidebar__logout" onClick={() => navigate('/')}>
        <LogoutIcon />
        <p>Keluar</p>
      </div>
    </div>
  );
};

export default Sidebar;
