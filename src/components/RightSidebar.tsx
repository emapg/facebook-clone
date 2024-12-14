import React from 'react';
import Avatar from './ui/Avatar';
import { User } from '../types';

const onlineFriends: User[] = [
  {
    id: '2',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function RightSidebar() {
  return (
    <div className="fixed right-0 top-14 w-64 h-screen bg-white p-4 overflow-y-auto hidden lg:block">
      <h2 className="font-semibold text-gray-500 mb-4">Online Friends</h2>
      <ul className="space-y-3">
        {onlineFriends.map((friend) => (
          <li key={friend.id} className="flex items-center space-x-3">
            <div className="relative">
              <Avatar src={friend.avatar} alt={friend.name} size="sm" />
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-700">{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}