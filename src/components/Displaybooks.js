import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../Redux/Books/books';

function Diplaybooks() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(AddBook(data));
    setAuthor('');
    setTitle('');
  };
  const handleBookname = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="BookName"
        onChange={handleBookname}
        value={title}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={handleAuthor}
        value={author}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}
export default Diplaybooks;
