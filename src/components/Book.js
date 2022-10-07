/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../Redux/Books/books';
import classes from '../Styles/Book.module.css';
import Chart from './Chart';

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
        <div className={classes.container} key={book.id}>
          <div className={classes.book}>
            <div className={classes.eachBook}>
              <p className={classes.cat}>{book.category}</p>
              <p className={classes.title}>{book.title}</p>
              <p className={classes.author}>{book.author}</p>
              &nbsp;
              <div className={classes.row}>
                <button className={classes.btns} type="button">
                  Comments
                </button>
                <div className={classes.line}>&#124;</div>
                <button
                  className={classes.btns}
                  type="button"
                  onClick={() => deleteBookHandler(book.id)}
                >
                  Remove
                </button>
                <div className={classes.line}>&#124;</div>
                <button
                  className={`${classes.btns} ${classes.lastBtn}`}
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className={classes.percentage}>
            <div className={classes.chart}>
              <Chart data={book.id} />
            </div>
            <div className={classes.percentageData}>
              <p className={classes.percentageNumber}>{Math.floor(book.id)}%</p>
              <p className={classes.percentageComplete}>Completed</p>
            </div>
          </div>
          <hr className={classes.vline} />
          <div className={classes.chapters}>
            <p className={classes.chapter}>CURRENT CHAPTER</p>
            <p className={classes.currentChapter}>
              Chapter:
              {Math.floor(book.id)}
            </p>
            <button type="button" className="btn">
              Update Progress
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
