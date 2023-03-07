import React, { useState } from "react";
import "./login.css";
import loginImage from "../../assets/images/loginImage.png";
import chatIcon from "../../assets/images/chatIcon.png";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { EmailIcon, PasswordIcon, ShowIcon } from "./Dummy";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login-page__container">
      <div className="login-page__left-section">
        <img src={loginImage} alt="shape" className="login-page__image" />
      </div>
      <div className="login-page__right-section">
        <div className="login-page__form">
          <img src={chatIcon} alt="chat-icon" />
          <div className="login-form__header">
            <p>Login ke akunmu</p>
            <p>Masuk akun untuk menggunakan PituChat</p>
          </div>
          <div className="login-form__main">
            <div className="login-form__input">
              <p>Email</p>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  placeholder="Email"
                  type="text"
                  padding="8px 44px"
                  border="1px solid #CCCCCC"
                  border-radius="8px"
                  focusBorderColor="#0C4AC0"
                />
              </InputGroup>
            </div>
            <div className="login-form__input">
              <p>Password</p>
              <InputGroup>
                <InputLeftElement children={<PasswordIcon />} />
                <Input
                  placeholder="Password"
                  type={isShownPassword ? "text" : "password"}
                  padding="8px 44px"
                  border="1px solid #CCCCCC"
                  border-radius="8px"
                  focusBorderColor="#0C4AC0"
                />
                <InputRightElement
                  className="show-icon"
                  children={
                    isShownPassword ? (
                      <ViewIcon w="20px" h="20px" color="#4D4D4D" />
                    ) : (
                      <ShowIcon />
                    )
                  }
                  onClick={() => setIsShownPassword(!isShownPassword)}
                />
              </InputGroup>
              <p>Lupa password?</p>
            </div>
            <Button
              w="100%"
              background="#0C4AC0"
              borderRadius="8px"
              color="#FAFAFA"
              padding="12px 0"
              onClick={() => navigate("/chat")}
            >
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
