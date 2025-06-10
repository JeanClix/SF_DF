'use client';

import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const scriptId = 'df-messenger';

    // Agregar el script de Dialogflow si no existe
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
    }

    // Crear el componente df-messenger si aún no existe
    const existingMessenger = document.querySelector('df-messenger');
    if (!existingMessenger) {
      const messenger = document.createElement('df-messenger');
      messenger.setAttribute('intent', 'WELCOME');
      messenger.setAttribute('chat-title', 'ChatbotSheets');
      messenger.setAttribute('agent-id', '9880dd7e-3681-4d64-bc72-b5e0f45daa4e');
      messenger.setAttribute('language-code', 'es');
      
      // (Opcional) Personalización de colores y estilos
      messenger.setAttribute('chat-icon', '/logo_bot.png');
      messenger.setAttribute('primary-color', '#e1a627');
      messenger.setAttribute('accent-color', '#F30001');
      messenger.setAttribute('height', '600px');
      messenger.setAttribute('width', '350px');

      document.body.appendChild(messenger);

      // Estilos personalizados para el widget
      const style = document.createElement('style');
      style.textContent = `
        df-messenger {
          --df-messenger-button-titlebar-color: #000000;
          --df-messenger-button-titlebar-font-color: #ffffff;
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
