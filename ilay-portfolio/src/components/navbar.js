import { NavLink } from "react-router-dom";

function navbar() {
  return (
  <div className="navbar">
    <ul class="nav-links">
        <li><NavLink activeStyle={{ color:'#5754a8' }} to="/">About</NavLink></li>
        <li><NavLink activeStyle={{ color:'#5754a8' }} to="/experience">Experience </NavLink></li>
        <li><NavLink activeStyle={{ color:'#5754a8' }} to="/projects">Projects</NavLink></li>
        <li><NavLink activeStyle={{ color:'#5754a8' }} to="/contacts">Contacts</NavLink></li>
    </ul>
  </div>
  );
}
export default navbar;