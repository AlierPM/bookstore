import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../store/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setBookTitle] = useState('');
  const [author, setBookAuthor] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const addNewBook = () => {
    const book = { id: uuidv4(), title, author };
    if (title !== '' && author !== '') {
      dispatch(addBook(book));
      setBookTitle('');
      setBookAuthor('');
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={handleBookTitle}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={handleBookAuthor}
        />
        <button type="submit" className="btn" onClick={addNewBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBook;
