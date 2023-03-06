import React, { useState } from 'react';
import './chat.css';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import ChatList from './components/ChatList/ChatList';
import ChatWindow from './components/ChatWindow/ChatWindow';
import tokpedLogo from '../../assets/images/tokpedLogo.png';

const Chat = () => {
  const data = [
    {
      name: 'Sergio Ramos',
      lastText: 'Bisakah kamu datang ke rumah ku?',
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 4,
      marketplace: 'Tokopedia',
    },
    {
      name: 'Karim Benzema',
      lastText: 'Apakah menurutmu aku striker terbaik di dunia?',
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 11,
      marketplace: 'Tokopedia',
    },
    {
      name: 'Toni Kroos',
      lastText: 'Tolong like postingan instagram terakhirku',
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 8,
      marketplace: 'Tokopedia',
    },
    {
      name: 'Ratu Tisha',
      lastText: 'Ayo buat sepakbola Indonesia berjaya lagi',
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 15,
      marketplace: 'Tokopedia',
    },
  ];
  const [selectedChat, setSelectedChat] = useState();
  const handleClick = (value) => {
    setSelectedChat(value);
  };
  console.log(selectedChat);
  return (
    <CommonLayout page={'chat'}>
      <div className="chat__container">
        <ChatList data={data} handleClick={handleClick} />
        <ChatWindow selectedChat={selectedChat} />
      </div>
    </CommonLayout>
  );
};

export default Chat;
