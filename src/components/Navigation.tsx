import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, User, MessageCircle, Users } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Heart, label: 'Home' },
    { path: '/matches', icon: Users, label: 'Matches' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-card px-4 py-2 rounded-full">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`p-2 rounded-full transition-colors ${
                location.pathname === item.path
                  ? 'bg-love-primary/20 text-love-primary'
                  : 'hover:bg-pink-100 text-gray-600'
              }`}
              aria-label={item.label}
            >
              <item.icon size={24} />
            </</Link>
          ))}
        </</div>
      </</div>
    </</nav>
  );
};

export default Navigation;