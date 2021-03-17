import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      {/**logo and brand */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#register">
          <Link to="/register">
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

      <div className="container">
        <form>
          <h3 className="text-center">Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email..."
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password..."
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Log in
          </button>
          <p className="forgot-password text-left">
            Forgot <Link to="/register"> password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
