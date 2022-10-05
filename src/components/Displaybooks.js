/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Math.random() * 100,
    title: '',
    author: '',
    category: '',
  });
  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      id: '',
      title: '',
      author: '',
      category: '',
    });
  };
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <>
      <h2>Add A Book</h2>
      <form onSubmit={addBookHandler}>
        <input
          type="text"
          placeholder="Enter book title"
          value={formData.title}
          name="title"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter book author"
          value={formData.author}
          name="author"
          onChange={changeHandler}
        />
        <select name="category" id="category" onChange={changeHandler}>
          <option value="">Categories</option>
          <option value="Action">Action</option>
          <option value="Comic">Comics</option>
          <option value="Classic">Classic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Novel">Novel</option>
          <option value="Magazine">Magazine Article</option>
          <option value="Scientific">Scientific</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
