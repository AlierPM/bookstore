export const ADD_BOOK = 'Books/books/ADD_BOOK';
export const REMOVE_BOOK = 'Books/books/REMOVE_BOOK  ';

export const initialState = {
  books: [
    {
      id: 1,
      title: 'Jesus Loves you',
      author: 'Mr.Forgiven',
      category: 'Life',
    },
    {
      id: 2,
      title: 'All men need life',
      author: 'Dr.Truciano',
      category: 'Life',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,

        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AddBook = (values) => (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: values,
  });
};

export const RemoveBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export default bookReducer;
