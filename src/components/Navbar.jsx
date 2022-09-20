import { Link } from "gatsby";
import React,{useRef} from "react";
import "./Navbar.scss";
function Navbar() {
const Burger = useRef()

const openBurger = () =>{
    Burger.current.classList.toggle("active")
}
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <Link to="/carousel" className="Navbar link">Horizontal scroll</Link>
        <Link to="/" className="Navbar link">Your Logo</Link>
        <input id="toggle" type="checkbox"></input>
        <label for="toggle" className="Navbar__container hamburger" ref={Burger} onClick={openBurger}>
         <span></span>
        </label>

      </div>
    </div>
  );
}

export default Navbar;
