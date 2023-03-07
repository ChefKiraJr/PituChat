import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import "./chatWindow.css";
import {
  SearchIcon,
  InfoIcon,
  AttachButton,
  EmptyMessageImage,
  Ellipse,
  CloseButton,
} from "./Dummy";

const ChatWindow = ({
  selectedChat,
  textInput,
  handleChange,
  handleSubmit,
}) => {
  const [isShownInfo, setIsShownInfo] = useState(false);
  console.log(selectedChat);
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
          <div className="chat-window__content">
            {selectedChat.textChat.map((value) => {
              return (
                <div
                  className={
                    value.status === "sender"
                      ? "chat-content__sender"
                      : "chat-content__receiver"
                  }
                >
                  {value.status === "sender" ? (
                    <div className="chat-sender__main">
                      <div className="chat-sender__text">
                        <p>{value.textContent}</p>
                      </div>
                      <p>Sent · Just now</p>
                    </div>
                  ) : (
                    <div className="chat-receiver__main">
                      <div className="chat-receiver__avatar">
                        <img src={selectedChat.avatar} alt="avatar" />
                      </div>
                      <div className="chat-receiver__content">
                        <p>{selectedChat.name}</p>
                        <div className="chat-receiver__text">
                          <p>{value.textContent}</p>
                        </div>
                        <p>Just now</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="chat-window__input">
            <AttachButton />
            <Input
              type="text"
              placeholder="Type a message"
              name="textInput"
              value={textInput}
              padding="10px 12px"
              border="1px solid #000000"
              borderRadius="20px"
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleSubmit(event)}
            />
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
            <div className="chat-info__avatar">
              <img
                src={selectedChat.avatar}
                alt="avatar"
                width="80px"
                height="80px"
              />
            </div>
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
            <div className="chat-info__created">
              <div className="chat-info__date">
                <p>Created at</p>
                <p>20 October 2022</p>
              </div>
              <div className="chat-info__date">
                <p>Created at</p>
                <p>20 October 2022</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
