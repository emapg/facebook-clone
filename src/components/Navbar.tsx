import React from 'react';
import { Facebook, Search, Home, Users, Bell, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-4">
            <Facebook className="h-8 w-8 text-blue-600" />
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex space-x-8">
            <Home className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <Users className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}