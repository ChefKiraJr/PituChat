import React, { useState } from 'react';
import './sidebar.css';
import { ChatIcon, ShopIcon, LogoutIcon } from './Dummy';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [page, setPage] = useState('chat');
  const navigate = useNavigate();
  return (
    <div className="sidebar__container">
      <div className="sidebar__menu">
        <div
          className={
            page === 'chat' ? 'sidebar-menu__active' : 'sidebar-menu__option'
          }
          onClick={() => setPage('chat')}
        >
          <ChatIcon />
          <p>Chat</p>
        </div>
        <div
          className={
            page === 'shop' ? 'sidebar-menu__active' : 'sidebar-menu__option'
          }
          onClick={() => setPage('shop')}
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
