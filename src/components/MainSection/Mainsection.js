import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillPatchCheckFill } from "react-icons/bs";
import image from "../../assets/banner/image.png";
import { BsSearch } from "react-icons/bs";
import "./main.css";
const Mainsection = () => {
  return (
    <div className="mainsection">
      <Container>
        <Row>
          <Col onMouseDown={6}>
            <p className="mainContain">
              Order food online <br></br> from your favourite<br></br> local restaurants.
            </p>
            <p className="mainDes">Freshly made food delivered to your door.</p>
            <div className="mainbtn">
              <span className="redbutton"></span>
              <input type="text" className="inputSectin" placeholder="Enter your location " />
              <button className="mainbutton">
                <BsSearch /> Search
              </button>
            </div>
          </Col>
          <Col onMouseDown={6}>
            <div className="mainright">
              <div className="topCard">
                <span className="cordcontent">
                  <BsFillPatchCheckFill /> 200k+
                </span>
                <p className="cardDesc">People Delivered</p>
              </div>
              <div className="mainImage">
                <img src={image} alt="missing" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mainsection;
