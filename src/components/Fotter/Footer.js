import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRightShort } from "react-icons/bs";
import delivery from "../../assets/banner/Deleviry.png";
import "./Fotter.css";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="fotterTitle">
              <h2 className="fotterTitlecontent">
                Explore your <br></br>favourite city’s food.
              </h2>
              <p className="fotterPara">
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.
              </p>
              <button className="fotterButton">
                Explore <BsArrowRightShort />
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className="fotterRight">
              <div className="fotterImage">
                <img src={delivery} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
