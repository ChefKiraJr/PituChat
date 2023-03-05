import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const CommonLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Sidebar page={props.page} />
    </>
  );
};

export default CommonLayout;