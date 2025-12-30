import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, MessageCircle, Users } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="glass-card fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full">
      <div className="flex items-center space-x-6">
        <Link to="/" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
          <Heart className="text-love-primary" size={24} />
        </</Link>
        <Link to="/matches" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
          <Users className="text-love-secondary" size={24} />
        </</Link>
        <Link to="/chat" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
          <MessageCircle className="text-love-primary" size={24} />
        </</Link>
        <Link to="/profile" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
          <User className="text-love-secondary" size={24} />
        </</Link>
      </</div>
    </</nav>
  );
};

export default Navigation;