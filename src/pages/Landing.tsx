import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  const features = [
    {
      icon: Heart,
      title: 'Smart Matching',
      description: 'Advanced algorithms find your perfect match'
    },
    {
      icon: Users,
      title: 'Verified Profiles',
      description: 'Only real people, no fake accounts'
    },
    {
      icon: MessageCircle,
      title: 'Secure Chat',
      description: 'Private and encrypted messaging'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold text-love-primary mb-4">LoveLine</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find your perfect match with our modern dating platform
        </p>
      </motion.</div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card max-w-md mx-auto p-8 rounded-2xl mb-12"
      >
        <form onSubmit={handleSignup} className="space-y-6">
          </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-love-primary text-white py-3 rounded-lg font-semibold hover:bg-love-dark transition-colors"
          >
            Get Started
          </button>
        </form>
      </motion.</div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="glass-card p-6 rounded-xl text-center"
          >
            <feature.icon className="mx-auto mb-4 text-love-primary" size={40} />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.</div>
        ))}
      </div>
    </div>
  );
};

export default Landing;