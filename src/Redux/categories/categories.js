const DISPLAY_STATUS = 'Books/books/DISPLAY_STATUS';

const initialState = {
  categories: [],
  loading: false,
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_STATUS:
      return {
        ...state,

        categories: [...state.categories, action.payload],
        loading: false,
      };
    default:
      return initialState;
  }
};

export const Status = () => (dispatch) => {
  dispatch({
    type: DISPLAY_STATUS,
    payload: ['Under construction.'],
  });
};

export default catReducer;
