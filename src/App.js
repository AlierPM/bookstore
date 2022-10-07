import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Category from './components/Category';
import './style.css';
import Bookslist from './components/BooksList';
import Books from './components/Books';
import { getBooks } from './Redux/Books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
