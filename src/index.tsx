import * as React from "react";
import * as ReactDOM from "react-dom";
import NameComponent from './components/NameComponent'
import UserComponent from './components/UserComponent'
import NavBarComponent from './components/NavBarComponent'
import MyTop from './components/MyTop'
import MySkills from './components/MySkills'
import "./index.css"

ReactDOM.render(
    <div className="pageDetails" id="nav">
        <NavBarComponent/>
        <section className="photoSpacing">
            <div className="nameComp">
                <NameComponent/>
            </div>
        </section>
        <section className="aboutCon">
            <div id="about" className="aboutMe">
                <h2>About Me</h2>
                <p>
                    I'm a highly motivated full-stack engineer that is primarily efficient in back-end development. I've spent the past several months writing Javascript APIs with tight security and integrity using Auth0 and other middleware. I believe I could be a valuable asset to your team and I have the passion to learn new software and mold into any development environment.
                </p>
            </div>
            <div className="userTop">
                <UserComponent birthdate={new Date(2003, 4, 19)} phone={6364595844} email='elijahhodge2003@gmail.com' website="Elijahhodgeportfolio.com" address="Wichita Falls, Texas" />
                <MyTop/>
            </div>
        </section>
        <section id="skills">
            <MySkills/>
        </section>
    </div>,
    document.getElementById("root")
);