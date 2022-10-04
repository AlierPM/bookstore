import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import './style.css';
import Bookslist from './components/BooksList';
import Books from './components/Books';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book" element={<Bookslist />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
