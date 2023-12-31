import React, { useState } from 'react';

import { logoK } from '../../images';

import {
  ChatContainer,
  CloseButton,
  Icon,
  // IconSend,
  IconWhats,
  Input,
  InputContainer,
  LogoContainer,
  LogoImage,
  PopupContainer,
  PopupContent,
  SendButton,
  WhatsAppIcon
} from './styles';

import { URL_WHATSAPP } from '../../database/social';

function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `${URL_WHATSAPP}text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    handleClosePopup();
    setMessage('');
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const containerStyle = {
    bottom: isOpen ? '80px' : '20px',
    cursor: isOpen ? 'auto' : 'pointer'
  };

  return (
    <ChatContainer style={containerStyle}>
      {!isOpen && (
        <WhatsAppIcon onClick={handleTogglePopup}>
          <IconWhats className="bx bxl-whatsapp" style={{ color: 'white' }} />
          <span style={{ fontSize: '14px', color: 'white' }}>
            Olá, como posso ajudar?
          </span>
        </WhatsAppIcon>
      )}
      {isOpen && (
        <>
          <LogoContainer>
            <LogoImage src={logoK} alt="Logo" />
          </LogoContainer>
          <PopupContainer>
            <PopupContent>
              <p>
                Nossa equipe de suporte ao cliente está aqui para responder às suas
                perguntas.
              </p>
              <p>Pergunte-nos qualquer coisa!</p>
            </PopupContent>
            <InputContainer>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Fale conosco!"
              />
              <SendButton type="button" onClick={handleSendMessage}>
                {/* <IconSend
                  className="bx bxs-paper-plane"
                  style={{ color: 'white' }}
                  title="Enviar mensagem"
                /> */}
                Enviar
              </SendButton>
            </InputContainer>
            <CloseButton onClick={handleClosePopup}>
              <Icon className="bx bx-x" style={{ color: 'white' }} title="Fechar" />
            </CloseButton>
          </PopupContainer>
        </>
      )}
    </ChatContainer>
  );
}

export default ChatPopup;
