import React, { useState } from 'react';
import './chat.css';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import ChatList from './components/ChatList/ChatList';
import ChatWindow from './components/ChatWindow/ChatWindow';
import tokpedLogo from '../../assets/images/tokpedLogo.png';
import { cloneDeep } from 'lodash';
import javiMalik from '../../assets/images/javiMalik.png';
import sarahLee from '../../assets/images/sarahLee.png';
import ratuTisha from '../../assets/images/ratuTisha.png';

const Chat = () => {
  const [data, setData] = useState([
    {
      name: 'Javi Malik',
      avatar: javiMalik,
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 4,
      marketplace: 'Tokopedia',
      textChat: [
        { textContent: 'Okee aman', status: 'receiver' },
        { textContent: 'Jemput ya tapi', status: 'sender' },
        {
          textContent: 'Ke mall aja, aku mau beli jam tangan',
          status: 'receiver',
        },
        { textContent: 'Yuk, kemana nih kita?', status: 'sender' },
        { textContent: 'Hai Vini, main yuk', status: 'receiver' },
      ],
    },
    {
      name: 'Mary Jane',
      avatar: ratuTisha,
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 8,
      marketplace: 'Tokopedia',
      textChat: [
        {
          textContent: 'Deadlinenya minggu ini ya',
          status: 'receiver',
        },
        {
          textContent: 'Duh belum lagi, lagi sibuk banget banyak tugas',
          status: 'sender',
        },
        { textContent: 'Kamu udah kerjain tugas OSIS?', status: 'receiver' },
      ],
    },
    {
      name: 'Sarah Lee',
      avatar: sarahLee,
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 11,
      marketplace: 'Tokopedia',
      textChat: [
        { textContent: 'Makasih', status: 'receiver' },
        { textContent: 'Bisa bisa', status: 'sender' },
        {
          textContent: 'Titip oleh-oleh dong apa aja',
          status: 'receiver',
        },
        { textContent: 'Iyaa', status: 'sender' },
        {
          textContent: 'Aku denger-denger kamu weekend ini pergi ke Bandung?',
          status: 'receiver',
        },
      ],
    },
    {
      name: 'Ratu Tisha',
      avatar: ratuTisha,
      logo: tokpedLogo,
      shopName: 'Beauty Lovers',
      unReadMessage: 15,
      marketplace: 'Tokopedia',
      textChat: [
        {
          textContent: 'Kesel banget tim jagoanku kalah',
          status: 'receiver',
        },
        { textContent: 'Nonton dong', status: 'sender' },
        { textContent: 'Kamu nonton bola semalem ga?', status: 'receiver' },
      ],
    },
  ]);
  const [selectedChat, setSelectedChat] = useState();
  const [textInput, setTextInput] = useState('');
  const [tempIndex, setTempIndex] = useState();
  const handleClick = (value, i) => {
    setTempIndex(i);
    setSelectedChat(value);
  };
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === 'Enter' && textInput !== '') {
      let temp = cloneDeep(data);
      temp[tempIndex].textChat.unshift({
        textContent: textInput,
        status: 'sender',
      });
      setData(temp);
      setSelectedChat(temp[tempIndex]);
      setTextInput('');
    }
  };
  return (
    <CommonLayout page={'chat'}>
      <div className="chat__container">
        <ChatList data={data} handleClick={handleClick} />
        <ChatWindow
          selectedChat={selectedChat}
          textInput={textInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </CommonLayout>
  );
};

export default Chat;
