'use client';

import { useEffect } from 'react';

const Chatbot = () => {
  // useEffect hook to handle the dynamic loading and configuration of the Dialogflow Messenger chatbot.
  useEffect(() => {
    const scriptId = 'df-messenger'; // Unique ID for the Dialogflow Messenger script.
    const chatbotAgentId = '9880dd7e-3681-4d64-bc72-b5e0f45daa4e'; // Your Dialogflow Agent ID.
    const chatbotTitle = 'Asistente Mega Force'; // Custom title for the chatbot.
    const chatbotLanguageCode = 'es'; // Language code for the chatbot (Spanish).

    // Define the path to the Mega Force logo to be used as the chatbot icon.
    // This URL is taken from your Header component for consistency.
    const megaforceLogoUrl = 'https://ext.same-assets.com/727016425/2008953691.png';

    // 1. Add the Dialogflow Messenger script to the document body if it's not already present.
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true; // Load script asynchronously.
      document.body.appendChild(script);
    }

    // 2. Create and configure the df-messenger HTML element.
    // Check if a df-messenger element already exists to prevent duplicates on re-renders.
    const existingMessenger = document.querySelector('df-messenger');
    if (!existingMessenger) {
      const messenger = document.createElement('df-messenger');
      messenger.setAttribute('intent', 'WELCOME'); // Sets the initial intent when the chat opens.
      messenger.setAttribute('chat-title', chatbotTitle); // Sets the title displayed in the chat window.
      messenger.setAttribute('agent-id', chatbotAgentId); // Your Dialogflow agent ID.
      messenger.setAttribute('language-code', chatbotLanguageCode); // Sets the language for the chatbot.

      // Customization of colors and icon to match the Mega Force brand.
      // The chat-icon is set to your Mega Force logo URL.
      messenger.setAttribute('chat-icon', megaforceLogoUrl);
      // primary-color: Used for elements like the send button and user messages. Matched to your blue/cyan.
      messenger.setAttribute('primary-color', '#3ca8e0');
      // accent-color: Used for interactive elements and some accents. Matched to your red/pink.
      messenger.setAttribute('accent-color', '#e64a61');
      messenger.setAttribute('height', '600px'); // Sets the height of the chat window.
      messenger.setAttribute('width', '350px');   // Sets the width of the chat window.

      document.body.appendChild(messenger);

      // 3. Apply custom CSS variables for more granular styling of the Dialogflow Messenger.
      const style = document.createElement('style');
      style.textContent = `
        df-messenger {
          /* Color for the chat button and title bar background. */
          --df-messenger-button-titlebar-color: #2D3748; /* Dark gray, similar to your footer */
          /* Font color for the chat button and title bar text. */
          --df-messenger-button-titlebar-font-color: #ffffff;
          /* Background color of the chat messages area. */
          --df-messenger-chat-background-color: #ffffff;
          /* Default font color for general text in the chat. */
          --df-messenger-font-color: #333333; /* Darker gray for readability */
          /* Color of the send message icon. */
          --df-messenger-send-icon: #e64a61; /* Matches your red/pink accent color */
          /* Background color for messages sent by the user. */
          --df-messenger-user-message: #3ca8e0; /* Matches your blue/cyan primary color */
          /* Background color for messages sent by the bot. */
          --df-messenger-bot-message: rgba(60, 168, 224, 0.1); /* A very light tint of your blue/cyan */
        }
      `;
      document.head.appendChild(style);
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render.

  // The Chatbot component itself doesn't render any visible React elements directly.
  // It's responsible for injecting the Dialogflow Messenger HTML and CSS into the DOM.
  return null;
};

export default Chatbot;
