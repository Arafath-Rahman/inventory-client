import React from 'react';
import useAllItems from '../../../Hooks/useAllItems';
import Item from '../../Items/Item/Item';
import './HomeItems.css';

const HomeItems = () => {
  const [items, setItems] = useAllItems();
  return (
    <div>
      <h2 className='mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5' style={{color:'tomato'}}>ITEMS</h2>
      <div id='items-container' className='container row  g-3'>
        {
          items.slice(0, 6).map(item => <Item item={item} />)
        }
      </div>
    </div>
  );
};

export default HomeItems;