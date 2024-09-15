import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle user input submission
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:2000/api/user/ask', {
        message: input,
      });

      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput(''); // Clear the input field
  };

  return (
    <div className="flex flex-col h-screen mt-20max-w-lg mx-auto p-4 bg-gradient-to-br from-teal-100 to-blue-200">
      <div className="flex flex-col h-full bg-white mt-10 shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl max-w-xs break-words ${
                  msg.sender === 'user' ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white self-end' : 'bg-gray-100 text-gray-800 self-start'
                } transition-transform transform hover:scale-105`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex items-center border-t border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-3 border border-gray-300 rounded-l-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-transform duration-300 placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
