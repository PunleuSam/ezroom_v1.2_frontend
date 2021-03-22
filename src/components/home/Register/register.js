import React from "react";
import "./register.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="register">
      {/**logo and brand */}
      <Navbar>
        <Navbar.Brand>
          <a href="/home">
            <img
              alt="home.logo"
              src="/home.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </a>
        </Navbar.Brand>
      </Navbar>
      {/**container register form*/}
      <div className="container">
        <form>
          <h3 className="text-center">Register</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered <br />
            <Link to="/login">log in?</Link>
          </p>
        </form>
      </div>
      /
    </div>
  );
};

export default register;
