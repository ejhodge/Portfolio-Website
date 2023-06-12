import * as React from "react";
import "./NameComponent.css"

let Logo ="file:///Users/elijahhodge/Downloads/DSC_0525.JPG";
let gitHub ="file:///Users/elijahhodge/Downloads/github.png"
let emailImg ="file:///Users/elijahhodge/Downloads/email.png"
let linkedIn ="file:///Users/elijahhodge/Downloads/linkedin.png"

export default class NameComponent extends React.Component <{}> {
  render() {
    return (
      <div>
          <div className="parent">
            <img  height="250" src={Logo} className="idPhoto"/> 
          </div>
          <div className="myInfo">
            <h1 className="myName">ELIJAH HODGE</h1>
            <p className="myTitle">Full Stack software engineer</p>
          </div>
          <div className="buttonRow">
            <a href="https://github.com/ejhodge">
              <img className="imgButton" src={gitHub} />
            </a>
            <a href="mailto: elijahhodge2003@gmail.com">
              <img className="imgButton" src={emailImg} />
            </a>
            <a href="https://www.linkedin.com/in/elijah-hodge-315b98253/">
              <img className="imgButton" src={linkedIn} />
            </a>
          </div>
          <div className="resButton">
            <a href="../assets/My Resume.pdf" download>
              <button type="button" className="inResButton">Download Resume</button>
            </a>
          </div>
      </div>
    );
  }
}