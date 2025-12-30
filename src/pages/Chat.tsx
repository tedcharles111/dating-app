import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [match, setMatch] = useState<{
    id: string;
    name: string;
    photos: string[];
  } | null>(null);

  useEffect(() => {
    // Mock data - in a real app, you would fetch from an API
    const mockMatches = [
      {
        id: '1',
        name: 'Sarah',
        photos: [
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        ]
      },
      {
        id: '2',
        name: 'Jessica',
        photos: [
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        ]
      },
      {
        id: '3',
        name: 'Emily',
        photos: [
          'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face'
        ]
      }
    ];

    const mockMessages = [
      {
        id: '1',
        senderId: '1',
        text: 'Hi there! How are you doing?',
        timestamp: new Date(Date.now() - 86400000)
      },
      {
        id: '2',
        senderId: 'current',
        text: 'I\'m good! Just enjoying this beautiful day. How about you?',
        timestamp: new Date(Date.now() - 86300000)
      },
      {
        id: '3',
        senderId: '1',
        text: 'Same here! Would you like to grab coffee sometime?',
        timestamp: new Date(Date.now() - 3600000)
      }
    ];

    const foundMatch = mockMatches.find(m => m.id === userId);
    setMatch(foundMatch || null);
    setMessages(mockMessages);
  }, [userId]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'current',
      text: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // In a real app, you would send the message to the server here
  };

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Match not found</</h2>
      </</div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="glass-card px-4 py-3 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="p-1 rounded-full hover:bg-pink-100">
          <ArrowLeft className="text-love-primary" size={24} />
        </</button>
        <img
          src={match.photos[0]}
          alt={match.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-800">{match.name}</</h2>
      </</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.senderId === 'current' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.senderId === 'current' ? 'bg-love-primary text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              <p>{message.text}</</p>
              <p className={`text-xs mt-1 ${message.senderId === 'current' ? 'text-white/70' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </</p>
            </</div>
          </</div>
        ))}
      </</div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
          />
          <button
            type="submit"
            className="bg-love-primary p-2 rounded-full text-white hover:bg-pink-600 transition-colors"
          >
            <Send size={20} />
          </</button>
        </</div>
      </</form>
    </</div>
  );
};

export default Chat;