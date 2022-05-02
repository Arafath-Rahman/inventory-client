import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="col col-md-6 col-lg-4 d-flex justify-content-center text-center">
      <Card style={{ width: "20rem" }}>
        <Card.Title className="fs-4 fw-bold my-1">{item.name}</Card.Title>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Text>
            <div className="d-flex justify-content-between align-items-center border px-3">
              <h5 className="fw-bold">Price: <span style={{ color: "tomato" }}>{item.price}</span></h5>
              <h5 className="fw-bold">Quantity: <span style={{ color: "tomato" }}>{item.quantity}</span></h5>
            </div>
            {item.description.length > 100 ? item.description.slice(0, 100)+'...' : item.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
