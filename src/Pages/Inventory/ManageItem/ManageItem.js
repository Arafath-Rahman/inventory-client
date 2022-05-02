import React from "react";
import useAllItems from "../../../Hooks/useAllItems";
import "./ManageItem.css";

const ManageItem = () => {
  const [items] = useAllItems();

  return (
    <div className="container mx-auto">
      {items.map((item) => (
        <>
          <div key={item._id} className="border d-flex justify-content-between">
            <div className="d-flex gap-3">
              <img src={item.img} width="100px" alt="pic" />
              <div>
                <h6>{item.name}</h6>
                <span className="d-block">Price: {item.price}</span>
                <span className="d-block">Quantity: {item.quantity}</span>
              </div>
            </div>
              <div>
                <button>Update</button>
                <button>Delete</button>
              </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ManageItem;
