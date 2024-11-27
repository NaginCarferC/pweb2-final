import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <h1 className="text-2xl font-bold text-purple-600">Learnia</h1>
          </div>

          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Teach on Learnia
            </Button>
            <ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer" />
            <User className="h-6 w-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};