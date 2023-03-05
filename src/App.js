import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { ChakraProvider } from '@chakra-ui/react';
import Chat from './pages/chat/Chat';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
