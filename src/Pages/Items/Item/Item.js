import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='col-12 col-md-4'>
      <p>Name: {item.name}</p>
    </div>
  );
};

export default Item;