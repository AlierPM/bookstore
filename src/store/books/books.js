// Actions
const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

// Initial State
export const initialState = [
  {
    id: 1,
    title: 'Money mastery from the Master ',
    author: 'Gary Keesse',
  },
  {
    id: 2,
    title: 'Seven women and the secret of their Greatness',
    author: 'Metaxas Eric',
  },
  {
    id: 3,
    title: 'Power of the Blood',
    author: 'Mary K. Bartex',
  },
];

// Reducer Function

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book !== action.bookId);

    default:
      return state;
  }
};

// Add A Book action

export const addBook = (book) => ({
  type: 'ADD',
  book,
});

// Remove a book action

export const removeBook = (bookId) => ({
  type: 'REMOVE',
  bookId,
});

export default bookReducer;
