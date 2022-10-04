import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBook } from '../Redux/Books/books';

function Book() {
  const books = useSelector((state) => state.books.books);
  useEffect(() => {}, [books]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(RemoveBook(id));
  };
  return (
    <div className="booksList">
      {books.map((Book) => (
        <div className="prevBooks" key={Book.id}>
          {Book.title}
          {Book.author}
          {Book.category}
          <button type="button" onClick={() => handleDelete(Book.id)}>
            Remove button
          </button>
        </div>
      ))}
    </div>
  );
}

export default Book;
