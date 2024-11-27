import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { Course } from '../types/course';
import { Button } from '../components/ui/Button';

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    description: 'Become a full-stack web developer with just one course.',
    price: 89.99,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Development',
    level: 'Beginner',
    duration: '52.5 hours'
  },
  {
    id: '2',
    title: 'Machine Learning A-Z™',
    instructor: 'Kirill Eremenko',
    description: 'Learn to create Machine Learning Algorithms in Python and R',
    price: 94.99,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    category: 'IT & Software',
    level: 'Intermediate',
    duration: '44 hours'
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    instructor: 'Phil Ebiner',
    description: 'Learn Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
    price: 84.99,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Marketing',
    level: 'Beginner',
    duration: '38 hours'
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Learn without limits</h1>
            <p className="text-lg mb-6">Start, switch, or advance your career with thousands of courses from expert instructors.</p>
            <Button variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Courses
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};