import { NavLink } from "react-router-dom";

function navbar() {
  return (
  <div className="navbar">
    <h1> Ilay Guler </h1>
    <ul className="nav-links">
        <li><NavLink activeClassName="nav-active" to="/">About</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/experience">Experience </NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/projects">Projects</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/contacts">Contacts</NavLink></li>
    </ul>
  </div>
  );
}
export default navbar;