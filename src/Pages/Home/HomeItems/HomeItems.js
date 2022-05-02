import React from 'react';
import useAllItems from '../../../Hooks/useAllItems';
import Item from '../../Inventory/Item/Item';
import './HomeItems.css';

const HomeItems = () => {
  const [items] = useAllItems();
  return (
    <div>
      <h2 className='mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5' style={{color:'tomato'}}>ITEMS</h2>
      <div className='container row  g-3'>
        {
          items.slice(0, 6).map(item => <Item key={item._id} item={item} />)
        }
      </div>
    </div>
  );
};

export default HomeItems;