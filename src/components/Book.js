import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../Redux/Books/books';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteBookHandler = (id) => {
    dispatch(removeBook(id));
  };
  if (!books) return <p>No Books Available!</p>;
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          &quot;
          {book.title}
          &quot; &nbsp; by &nbsp;
          {book.author}
          {book.category}
          <button type="button" onClick={() => deleteBookHandler(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
