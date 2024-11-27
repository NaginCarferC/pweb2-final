export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}