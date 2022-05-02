import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  //fetching a single item
  useEffect( () => {
    fetch(`http://localhost:5000/inventory/${itemId}`)
    .then(res => res.json())
    .then(data => setItem(data))
  })
  
  const {name, img, price, quantity, description, supplier} = item;
  return (
    <div className='container mx-auto'>
      <div className='row g-3'>
        <div className='col-12 col-md-6 mx-auto'>
          <img src={img} className="w-75 border d-block mx-auto" alt="product" />
        </div>
        <div className='col-12 col-md-6'>
          <h1>{name}</h1>
          <h3>Price: ${price}</h3>
          <h3>Quantity: {quantity}</h3>
          <h6>Supplier Name: {supplier}</h6>
          <p>Description: {description}</p>
          <div>
            <button>Delivered</button>
          </div>
          <div>
            <form>
              <input type="text" name="stock" id="stock" /> <br />
              <input type="submit" value="Restock" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;