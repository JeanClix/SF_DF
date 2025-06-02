'use client'

import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const scriptId = 'df-messenger';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
    }

    const existingMessenger = document.querySelector('df-messenger');
    if (!existingMessenger) {
      const messenger = document.createElement('df-messenger');
      messenger.setAttribute('intent', 'WELCOME');
      messenger.setAttribute('chat-title', 'SMART BOT');
      messenger.setAttribute('agent-id', '63b04759-2831-48ae-aa04-6d6e61ddded0');
      messenger.setAttribute('language-code', 'es');
      messenger.setAttribute('chat-icon', '/logo_bot.png');
      messenger.setAttribute('primary-color', '#e1a627');
      messenger.setAttribute('accent-color', '#F30001');
      messenger.setAttribute('height', '600px');
      messenger.setAttribute('width', '350px');
      
      document.body.appendChild(messenger);

      const style = document.createElement('style');
style.textContent = `
  df-messenger {
    --df-messenger-button-titlebar-color: #000000; /* <- Color de la bola (botón flotante) */
    --df-messenger-button-titlebar-font-color: #ffffff; /* <- Color del ícono dentro de la bola */
    --df-messenger-chat-background-color: #ffffff;
    --df-messenger-font-color: #000000;
    --df-messenger-send-icon: #f30001;
    --df-messenger-user-message: #e1a627;
    --df-messenger-bot-message: rgba(128, 128, 128, 0.2);
  }
`;
document.head.appendChild(style);

    }
  }, []);

  return null;
};

export default Chatbot;