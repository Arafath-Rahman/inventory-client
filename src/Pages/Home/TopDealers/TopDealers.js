import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { Parallax } from "react-parallax";
import "./TopDealers.css";

const insideStyles = {
  background: "transparent",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const image4 = "https://i.ibb.co/4pNrYhw/6829613.jpg";

const TopDealers = () => {
  return (
    <div className="mt-5 pt-5">
      <div>
        <h2
          className="mt-5 text-center fs-2 fw-bold mb-5"
          style={{ color: "tomato" }}
        >
          TOP DEALERS
        </h2>
      </div>
      <div>
        <Parallax
          bgImage={image4}
          strength={200}
          renderLayer={(percentage) => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(166, 196, 209, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "5%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500,
                }}
              />
            </div>
          )}
        >
          <div style={{ height: "100vh" }}>
            <div style={insideStyles} className="d-block mx-auto text-center">
              <Carousel fade interval={null} indicators={false}>
                <Carousel.Item>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://i.ibb.co/nc1SB5d/d3.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Johnny Manna</Card.Title>
                      <Card.Text>
                        <div className="mb-3" style={{color:"orange"}}>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </div>
                        Sales amount exceeds 5 lac this year.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://i.ibb.co/bLTr3M0/d2.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Amber Shabnoor</Card.Title>
                      <Card.Text>
                      <div className="mb-3" style={{color:"orange"}}>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </div>
                        Total sales of about 6,20,000 in 2022.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://i.ibb.co/wL9ST1c/d1.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Will Joshim</Card.Title>
                      <Card.Text>
                      <div className="mb-3" style={{color:"orange"}}>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </div>
                        Around 7 lacs of sales done in 2022.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default TopDealers;
