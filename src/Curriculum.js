import React, { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import "./Curriculum.css";

class AllCards extends Component {
  render() {
    return (
      <div>
        <h1 className="jobTitle">Product Designer</h1>
        <div className="container mt-2 mainCards">
          <div className="row">
            <div className="card-body p-0 col-lg-3 border-top border-dark ">
              <Experience />
            </div>
            <div className="card-body p-0 col-lg-3 border-top border-dark">
              <Education />
            </div>
            <div className="card-body p-0 col-lg-3 border-top border-dark">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCards;
