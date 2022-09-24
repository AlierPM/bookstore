import React from 'react';

const AddBook = () => (
  <>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit" className="btn">
        Add Book
      </button>
    </form>
  </>
);

export default AddBook;
