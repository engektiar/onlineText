import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../assets/logo/FoodTime.png";
import { BsFillCartFill, BsChevronDown } from "react-icons/bs";
const Header = () => {
  return (
    <div>
      <Navbar className="headermain">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="misiing" />{" "}
          </Navbar.Brand>
          <Nav className="auto">
            <div className="manuItem">
              <Nav.Link className="navlink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navlink" href="#features">
                Blog
              </Nav.Link>
              <Nav.Link className="navlink" href="#pricing">
                About Us
              </Nav.Link>
              <Nav.Link className="navlink" href="#pricing">
                EN <BsChevronDown className="arroicon" />
              </Nav.Link>
            </div>
            <Nav.Link href="#pricing">
              <button className="loginbtn">Login</button>
            </Nav.Link>
            <Nav.Link href="#pricing" className="carditem">
              <BsFillCartFill className="addtocardt" />
              <span className="card-count">2</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
