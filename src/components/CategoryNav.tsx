import React from 'react';

const categories = [
  'Development',
  'Business',
  'Design',
  'Marketing',
  'IT & Software',
  'Personal Development',
  'Photography',
  'Music'
];

export const CategoryNav: React.FC = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center space-x-8 h-12 overflow-x-auto">
          {categories.map((category) => (
            <li
              key={category}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-purple-600 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};