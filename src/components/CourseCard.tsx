import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types/course';
import { Button } from './ui/Button';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{course.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-900">${course.price}</span>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{course.level}</span>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{course.duration}</span>
        </div>
      </div>
    </div>
  );
};