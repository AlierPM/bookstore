/* eslint-disable operator-linebreak */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../Redux/categories/categories';
import classes from '../Styles/Categories.module.css';

function Author() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {}, [categories]);
  return (
    <div className={classes.container}>
      {categories &&
        categories.map((category) => (
          <p key={Math.random()} className={classes.text}>
            {category}
          </p>
        ))}
      <button type="button" className="btn" onClick={() => dispatch(Status())}>
        Check status
      </button>
      {categories &&
        categories.map((category) => <p key={Math.random()}>{category}</p>)}
    </div>
  );
}

export default Author;
