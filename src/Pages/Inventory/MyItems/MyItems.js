import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [userItems, setUserItems] = useState([]);

  //getting users added items only
  useEffect(() => {
    const getUserItems = async () => {
      const url = `http://localhost:5000/myItems?email=${user?.email}`;
      console.log(url);
      try {
        const { data } = await axiosPrivate.get(url);
        setUserItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error("Authorization error occurred. \nPlease Login again!", {
            toastId: "error1",
            bodyStyle: { textAlign: "center" },
          });
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getUserItems();
  }, [user, navigate]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = userItems.filter((item) => item._id !== id);
          setUserItems(remaining);
        });
    }
  };

  const handleEdit = (id) => {
    alert("working on edit...");
  };

  const gotoHome = () => navigate("/");

  if (!user) {
    gotoHome();
  }

  return (
    <div>
      <h2
        className="mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5"
        style={{ color: "tomato" }}
      >
        My Items
      </h2>
      <div>
        {userItems.map((item) => (
          <>
            <div
              key={item._id}
              className="border d-flex justify-content-between px-2 w-75 mx-auto rounded mb-1"
            >
              <div className="d-flex gap-3">
                <img src={item.img} width="100px" alt="pic" />
                <div>
                  <h6>{item.name}</h6>
                  <span className="d-block">Price: {item.price}</span>
                  <span className="d-block">Quantity: {item.quantity}</span>
                  <span className="d-block">
                    Supplier: {item?.supplier?.split("@")[0]}
                  </span>
                </div>
              </div>
              <div className="my-auto d-flex gap-2">
                <button
                  onClick={() => handleEdit(item._id)}
                  style={{ fontSize: "24px", color: "seagreen" }}
                  className="border rounded"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  style={{ fontSize: "24px", color: "tomato" }}
                  className="border rounded"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
