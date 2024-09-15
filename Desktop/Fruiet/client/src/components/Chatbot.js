import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Handle user input submission
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('https://fruiet-2.onrender.com/api/user/ask', {
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
    <div className="flex flex-col h-screen max-w-lg mx-auto p-4 bg-gray-100">
      <div className="flex flex-col h-[700px] bg-white shadow-lg rounded-lg overflow-hidden"> {/* Adjusted height */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex border-t border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-3 border-none outline-none"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
