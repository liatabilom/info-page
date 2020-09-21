import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

class Search extends Component {
  state = "";
  preventReload = (event) => {
    event.preventDefault();
    this.setState({});
  };

  render() {
    return (
      <div className="searchBar">
        <h1 style={{ margin: 0 }}>
          <div className="clearfix">
            <form onSubmit={this.preventReload}>
              <a
                className="emailInput"
                href="mailto:nadiacoralves@gmail.com?Subject=Hi%20Nadia"
                target="_top"
                // className="submitEmail"
                style={{ color: "black" }}
              >
                <input
                  className=" float-left"
                  type="text"
                  placeholder="Email"
                />
                <FontAwesomeIcon icon={faChevronRight} size="1x" />
              </a>
            </form>
            <span className="infoIcon">
              <FontAwesomeIcon icon={faInfoCircle} size="1x" />
            </span>

            <a
              href="https://nadiacoralves.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span className="avocadoIcon" role="img" aria-label="Avocado ">
                🥑
              </span>
            </a>
          </div>
        </h1>
      </div>
    );
  }
}

export default Search;
