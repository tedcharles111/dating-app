import React, { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { Camera, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { currentUser, setUser } = useUserStore();
  const navigate = useNavigate();

  const [name, setName] = useState(currentUser?.name || '');
  const [age, setAge] = useState(currentUser?.age || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [interests, setInterests] = useState<string[]>(currentUser?.interests || []);
  const [newInterest, setNewInterest] = useState('');
  const [photos, setPhotos] = useState<string[]>(currentUser?.photos || [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      id: currentUser?.id || Date.now().toString(),
      name,
      age: Number(age),
      bio,
      interests,
      photos
    };
    setUser(user);
    navigate('/matches');
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const addPhoto = () => {
    const newPhoto = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 100)}?w=300&h=300&fit=crop&crop=face`;
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-love-primary mb-8 text-center">Create Your Profile</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="glass-card p-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                {index === 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={24} />
                  </div>
                )}
              </div>
            ))}
            {photos.length < 6 && (
              <button
                type="button"
                onClick={addPhoto}
                className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-love-primary transition-colors"
              >
                <Plus className="text-gray-400" size={24} />
              </button>
            )}
          </div>

          <div className="space-y-4">
            </div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
                required
              />
            </div>

            </div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
                required
                min="18"
              />
            </div>

            </div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
                rows={4}
                placeholder="Tell us about yourself..."
                required
              />
            </div>

            </div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {interests.map((interest, index) => (
                  <span key={index} className="bg-love-primary text-white px-3 py-1 rounded-full text-sm flex items-center">
                    {interest}
                    <button
                      type="button"
                      onClick={() => removeInterest(interest)}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add an interest"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-love-primary"
                />
                <button
                  type="button"
                  onClick={addInterest}
                  className="bg-love-primary text-white px-4 py-2 rounded-r-lg hover:bg-love-dark transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-love-primary text-white py-3 rounded-lg font-semibold hover:bg-love-dark transition-colors"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;