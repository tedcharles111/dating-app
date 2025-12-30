import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  photos: string[];
}

interface UserState {
  currentUser: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  setUser: (user) => set({ currentUser: user })
}));