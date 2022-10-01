import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { statusCheck } from '../store/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statusCheck());
  }, []);

  const fetchCategories = () => {
    dispatch(statusCheck());
  };
  return (
    <div>
      <button type="button" className="check" onClick={fetchCategories}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
