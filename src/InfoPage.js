import React, { Component } from "react";
import Curriculum from "./Curriculum";
import Search from "./Search";

class InfoPage extends Component {
  render() {
    return (
      <div>
        <h1>
          <header className="header .d-sm-flex">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
          <Search />
        </h1>
        <h2>
          <Curriculum />
        </h2>
      </div>
    );
  }
}

export default InfoPage;
