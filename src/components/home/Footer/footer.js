import React from "react";
import "./footer.css";

const footer = () => {
  return (

    <div className="main-footer" >
      <div className="container">
        <div className="row">
          {/**col 1 
           * logo
          */}
          <div className="col">
          <a href="/home">
          <img
            alt=""
            src="/home.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </a>
          </div>

          {/**col 2 US*/}
          <div className="col">
            <h3>Us</h3>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Start up</li>
              <li>RUPP, STEM</li>
              <li>What's new?</li>
            </ul>
          </div>

          {/**col 3 
           * contact
          */}
          <div className="col">
            <h3>Contact</h3>
            <ul className="list-unstyled">
              <li>012 xxx xxx</li>
              <li>ezkh@gmail.com</li>
            </ul>
          </div>

          {/**col 4 
           * social media
          */}
          <div className="col">
            <h3>Social</h3>
            <ul className="list-unstyled">
              <li>facebook</li>
              <li>instagram</li>
              <li>twitter</li>
              <li>youtube</li>
              <li>linkin</li>
              <li>github</li>
            </ul>
          </div>
        </div>

        {/**copyright */}
        <hr />
        <div className="row">
          <div className="col text-center">
            <p className="col-sm">Alright reserved!</p>
            <p className="col-sm">
              &copy; copyright {new Date().getFullYear()} by Punleu | EZ
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
