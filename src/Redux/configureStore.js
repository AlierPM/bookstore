import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/books';
import catReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: catReducer,
  },
});

export default store;
