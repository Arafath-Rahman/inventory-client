import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/inventory', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(result => console.log(result));
    reset();  
  };
  return (
    <div className='w-50 w-md-75 mx-auto'>
      <h2
        className="mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5"
        style={{ color: "tomato" }}
      >
        Add Item to Inventory
      </h2>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("name", { required: true })}
          placeholder="Item Name"
        />
        <textarea
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("description", { required: true })}
          placeholder="Short Description"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("price", { required: true })}
          placeholder="Price"
          type="number"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("quantity", { required: true })}
          placeholder="Quantity"
          type="number"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("img", { required: true })}
          placeholder="Photo URL"
        />
        
        <input
          type="submit"
          value="Add Item"
          className="d-block mx-auto border rounded"
        />
      </form>
    </div>
  );
};

export default AddItem;