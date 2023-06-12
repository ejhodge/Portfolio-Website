import * as React from "react";
import "./NavBarComponent.css"

export default class NavBarComponent extends React.Component <{}> {
    render() {
       return (
          <div className="navRow">
              <p className="titleName">ELIJAH</p>
                <a className="navLinks" href="#about">About</a>
                <a className="navLinks" href="#skills">Skills</a>
                <a className="navLinks" href="../assets/My Resume.pdf" download>Resume</a>
                <a className="navLinks" href="https://github.com/ejhodge">Portfolio</a>
                <a className="navLinks" href="mailto: elijahhodge2003@gmail.com">Contact</a>
          </div>
       );
    }
}