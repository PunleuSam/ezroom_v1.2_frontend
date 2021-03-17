import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div>
      {/**logo and brand */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#register">
          <Link to="/login">
            <img
              alt=""
              src="/home.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Link>
          eZRoom
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
