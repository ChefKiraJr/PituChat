import React, { useState } from 'react';
import './chatWindow.css';
import {
  SearchIcon,
  InfoIcon,
  AttachButton,
  EmptyMessageImage,
  Ellipse,
  CloseButton,
} from './Dummy';

const ChatWindow = ({ selectedChat }) => {
  const [isShownInfo, setIsShownInfo] = useState(false);
  return (
    <div className="container-asli">
      {selectedChat ? (
        <div className="chat-window__container">
          <div className="chat-window__header">
            <p>{selectedChat.name}</p>
            <div className="chat-header__menu">
              <SearchIcon />
              <div className="info-icon" onClick={() => setIsShownInfo(true)}>
                <InfoIcon />
              </div>
            </div>
          </div>
          <div className="chat-window__content"></div>
          <div className="chat-window__input">
            <AttachButton />
            <div className="chat-input__text">Type a message</div>
          </div>
        </div>
      ) : (
        <div className="chat-window-empty__container">
          <div className="chat-window__empty">
            <div className="chat-empty__image">
              <EmptyMessageImage />
              <div className="chat-empty__shape">
                <Ellipse />
              </div>
            </div>
            <div className="chat-empty__message">
              <p>Tidak ada pesan terpilih</p>
              <p>Pilih pesan untuk dibaca</p>
            </div>
          </div>
        </div>
      )}
      {isShownInfo && (
        <div className="chat-window__info">
          <div
            className="chat-info__header"
            onClick={() => setIsShownInfo(false)}
          >
            <CloseButton />
          </div>
          <div className="chat-info__content">
            <div className="chat-info__avatar"></div>
            <div className="chat-info__name">
              <p>{selectedChat.name}</p>
              <p>{selectedChat.marketplace}</p>
            </div>
            <div className="chat-info__shop">
              <img src={selectedChat.logo} alt="logo" />
              <p>{selectedChat.shopName}</p>
            </div>
          </div>
          <div className="chat-info__about">
            <p>About Conversation</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
