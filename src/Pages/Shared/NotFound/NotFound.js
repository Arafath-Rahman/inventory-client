import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="w-50 mx-auto text-center p-3 my-5 border rounded">
      <h2 className="text-danger fw-bold">OOPS!!</h2>
      <div>
        <img src="https://i.ibb.co/n32C3ZV/404-page-not-found.png" alt="notfound" />
      </div>
    </div>
  );
};

export default NotFound;