import * as React from "react";
import "./MySkills.css";
import project1Img from "../assets/portfolio pic.png"
import project2Img from "../assets/git hub shop pic.png"

let jS ="https://gitlab.schukai.com/uploads/-/system/group/avatar/139/javascript.png"
let tS ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
let nodeJs ="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
let a0 ="https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png"
let mDB ="https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png"
let react ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"

export default class MySkills extends React.Component <{}> {
    render() {
      return (
        <div className="backRec">
            <h2>My Top Skills</h2>
            <div className="mySkills">
                <div className="skillRowOne">
                    <div className="skillCon">
                        <img className="skill" src={jS}/>
                        <h3 className="skillName">JavaScript</h3>
                    </div>
                    <div className="skillCon">
                        <img className="skill" src={nodeJs}/>
                        <h3 className="skillName">Node.js</h3>
                    </div>
                    <div className="skillCon">
                        <img className="skill" src={tS}/>
                        <h3 className="skillName">TypeScript</h3>
                    </div>
                </div>
                <div className="skillRowTwo">
                    <div className="skillCon">
                        <img className="skill" src={a0}/>
                        <h3 className="skillName2">Auth0</h3>
                    </div>
                    <div className="skillCon">
                        <img className="skill" src={mDB}/>
                        <h3 className="skillName2">MongoDb</h3>
                    </div>
                    <div className="skillCon">
                        <img className="skill" src={react}/>
                        <h3 className="skillName2">React</h3>
                    </div>
                </div>
            </div>
            <h2 className="projectTitle">Projects</h2>
            <div className="examples">
                <div className="con1">
                    <img className="box1" src={project1Img}/>
                    <div className="box1Name">Portfolio Code</div>
                </div>
                <div className="con2">
                    <img className="box2" src={project2Img}/>
                    <div className="box2Name">AUTH0 Shop API</div>
                </div>
            </div>
            <div className="exampleButton">
                <a className="e1Link" href="https://github.com/ejhodge/Portfolio-Website.git">
                    <button className="e1">See Code</button>
                </a>
                <a className="e2Link" href="https://github.com/ejhodge/My-api">
                    <button className="e2">See Code</button>
                </a>
            </div>
            <a className="btt" href="#nav">
                <h3 className="bttText">Back To Top</h3>
            </a>
        </div>
      );
    }
}