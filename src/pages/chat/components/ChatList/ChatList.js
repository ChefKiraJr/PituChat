import React, { useState } from 'react';
import './chatList.css';
import { SearchIcon, FilterIcon, Checkbox } from './Dummy';

const ChatList = ({ data, handleClick }) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  return (
    <div className="chat-list__container">
      <div className="chat-list__header">
        <p>Chat</p>
        <div className="chat-list__menu">
          {searchStatus ? (
            <div className="chat-menu__input">
              <div
                className="menu-icon"
                onClick={() => {
                  setSearchStatus(false);
                  setFilterStatus(false);
                }}
              >
                <SearchIcon />
              </div>
              <p>Cari</p>
            </div>
          ) : (
            <div
              className="menu-icon"
              onClick={() => {
                setSearchStatus(true);
                setFilterStatus(false);
              }}
            >
              <SearchIcon />
            </div>
          )}
          <div
            className="menu-icon"
            onClick={() => {
              setFilterStatus(!filterStatus);
              setSearchStatus(false);
            }}
          >
            <FilterIcon />
          </div>
        </div>
        {filterStatus && (
          <div className="chat-filter__select">
            <div className="chat-filter__option">
              <Checkbox />
              <p>Shopee - Beauty Lovers</p>
            </div>
            <div className="chat-filter__option">
              <Checkbox />
              <p>Shopee - Makeupucino</p>
            </div>
            <div className="chat-filter__option">
              <Checkbox />
              <p>Tokopedia - Beauty Lovers</p>
            </div>
            <div className="chat-filter__option">
              <Checkbox />
              <p>Tokopedia - Makeupucino</p>
            </div>
            <div className="chat-filter__all">Pilih Semua</div>
          </div>
        )}
      </div>
      <div className="chat-list__option">
        <div className="chat-option__active">
          <p>Perlu Balas</p>
          <div className="chat-bubble__small">{data.length}</div>
        </div>
        <div className="chat-option__inactive">Terbalas</div>
        <div className="chat-option__inactive">Semua chat</div>
      </div>
      <div className="chat-list__content">
        {data.map((value) => {
          return (
            <div
              className="chat-list__people"
              onClick={() => handleClick(value)}
            >
              <div className="chat-list__avatar"></div>
              <div className="chat-list__name">
                <p>{value.name}</p>
                <p>{value.lastText}</p>
                <div className="chat-list__shop">
                  <img src={value.logo} alt="logo" />
                  <p>{value.shopName}</p>
                </div>
              </div>
              <div className="chat-list__info">
                <p>Today</p>
                <div className="chat-bubble__large">{value.unReadMessage}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;