import "./App.css";

import Background from "./assets/images/bg-presentation.jpg";
import { CgMenuGridR } from "react-icons/cg";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import Material from "./components/Material/Material";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="background-img">
        <img src={Background} alt="" />
        <div className="Navbar">
          <div className="title">Material-UI</div>
          <div className="right-side">
            <ul className="nav-items">
              <li>
                <CgMenuGridR className="menu-bar" />
                Pages
                <IoChevronDownOutline className="down-arrow" />
              </li>
              <li>
                <AiFillDatabase className="menu-bar" />
                Sections
                <IoChevronDownOutline className="down-arrow" />
              </li>
              <li>
                <SiGoogledocs className="menu-bar" />
                Docs
                <IoChevronDownOutline className="down-arrow" />
              </li>
              <li>
                <GrGithub className="menu-bar" />
                Github
                <IoChevronDownOutline className="down-arrow" />
              </li>
            </ul>
            <button className="down-btn">FREE DOWNLOAD</button>
          </div>
        </div>
      </div>
      <div className="center-name">
        <h1>
          Otis Kit<span className="pro-badge">PRO</span>
        </h1>
        <p>
          Start the Development with ReactJS & MUI Design System inspired by
          <br />
          material Design
        </p>
      </div>
      <div className="section">
        <Material />
        <Footer />
      </div>
    </div>
  );
}

export default App;
