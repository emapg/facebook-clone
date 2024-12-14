import React from 'react';
import { Users, Bookmark, Calendar, Video, ShoppingBag, Clock } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Users, label: 'Friends' },
    { icon: Bookmark, label: 'Saved' },
    { icon: Calendar, label: 'Events' },
    { icon: Video, label: 'Watch' },
    { icon: ShoppingBag, label: 'Marketplace' },
    { icon: Clock, label: 'Memories' },
  ];

  return (
    <div className="fixed left-0 top-14 w-64 h-screen bg-white p-4 overflow-y-auto">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <item.icon className="h-6 w-6 text-blue-500" />
              <span className="text-gray-700">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}