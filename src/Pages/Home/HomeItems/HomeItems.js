import React from 'react';
import { MdInventory } from "react-icons/md";
import useAllItems from '../../../Hooks/useAllItems';
import Item from '../../Inventory/Item/Item';
import './HomeItems.css';

const HomeItems = () => {
  const [items] = useAllItems();
  return (
    <div>
      <h2 className='mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5' style={{color:'tomato'}}>INVENTORY</h2>
      <div className='container row  g-3'>
        {
          items.slice(0, 6).map(item => <Item key={item._id} item={item} />)
        }
      </div>
    <div className=''>
      <button style={{backgroundColor: 'goldenrod', color:'white'}} className='btn rounded border d-block mx-auto mt-4 py-3 w-50'>Manage Inventories <MdInventory /> </button>
    </div>
    </div>
  );
};

export default HomeItems;