import React from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />
      <HomePage />
    </div>
  );
}

export default App;