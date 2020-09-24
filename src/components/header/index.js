import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <nav>
          <Link exact to="/">
            HOME
          </Link>
          <Link to="/music">Letra de Música</Link>
          <Link to="/aboutme">Sobre Mim</Link>
        </nav>
      </div>
    );
  }
}
