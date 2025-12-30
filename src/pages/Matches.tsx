import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, X, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PotentialMatch {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  photos: string[];
  distance: number;
}

const Matches: React.FC = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState<PotentialMatch[]>([
    {
      id: '1',
      name: 'Sarah',
      age: 28,
      bio: 'Adventure seeker and coffee lover. Looking for someone to explore the world with!',
      interests: ['Hiking', 'Photography', 'Travel', 'Coffee'],
      photos: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face'
      ],
      distance: 5
    },
    {
      id: '2',
      name: 'Jessica',
      age: 31,
      bio: 'Yoga instructor and vegan foodie. Passionate about sustainability and wellness.',
      interests: ['Yoga', 'Meditation', 'Vegan Cooking', 'Nature'],
      photos: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop&crop=face'
      ],
      distance: 3
    },
    {
      id: '3',
      name: 'Emily',
      age: 26,
      bio: 'Bookworm and aspiring writer. Looking for deep conversations and meaningful connections.',
      interests: ['Reading', 'Writing', 'Music', 'Art'],
      photos: [
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face'
      ],
      distance: 8
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  const handleLike = () => {
    setLikedUsers([...likedUsers, matches[currentIndex].id]);
    nextProfile();
  };

  const handleDislike = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentMatch = matches[currentIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-love-primary mb-8 text-center">Discover</h1>

      {currentMatch && (
        <div className="max-w-md mx-auto">
          <motion.div
            key={currentMatch.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={currentMatch.photos[0]}
                  alt={currentMatch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    </div>
                      <h2 className="text-2xl font-bold">{currentMatch.name}, {currentMatch.age}</h2>
                      <p className="text-sm">{currentMatch.distance} miles away</p>
                    </div>
                    <button
                      onClick={() => navigate(`/chat/${currentMatch.id}`)}
                      className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <MessageCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-700 mb-4">{currentMatch.bio}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentMatch.interests.map((interest, index) => (
                      <span key={index} className="bg-love-primary/10 text-love-primary px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={handleDislike}
                className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <X className="text-gray-400" size={28} />
              </button>
              <button
                onClick={handleLike}
                className="bg-love-primary p-4 rounded-full shadow-lg hover:bg-love-dark transition-colors"
              >
                <Heart className="text-white" size={28} fill="white" />
              </button>
            </div>
          </motion.</div>
        </div>
      )}

      {currentIndex >= matches.length - 1 && (
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">No more profiles</h2>
          <p className="text-gray-500">Check back later for new potential matches!</p>
        </div>
      )}
    </div>
  );
};

export default Matches;