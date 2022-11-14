import React from "react";
import pic from '../assets/me.jpg'
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Home extends React.Component {

    componentDidMount(): void {
        setActive("home");
        setColorClass("content", "ngray");
        setBGColor("--navgray");
        setBorderRad("content", ["bl_round"]);
        toggleInactive("content");
        toggleInactive("fancy");
        toggleInactive("pr_img");
        toggleInactive("ws-link");
    }

    render() {
        return (
            <div className="trans" id="homecnt">
                <h1 className="title">Christian Dirks,</h1><h1 className="fancy-lora font-brush" id="fancy">Web-Dev</h1>
                <div className="text-tl inline">
                    <span className="font-brush font-larger">Hello</span>, I am Christian Dirks <br />
                    As of 2022 I've begun switching from tech-support, to tech-create. <br />
                    <br />
                    Having previous experience in Programming making plugins for older games in lua API's, I have now made two sites with React and JS <br />
                    <br />
                    My main site can be found <a href="https://aze-m.com" id="ws-link" target="_blank">here</a> which has a private codebase, as well as implementation of a few express.js backends which are closed off to outside requests. <br />
                </div>
                <img src={pic} alt="My face" className="img inline" id="pr_img" />
                <div className="text-bt">
                    And this site, which serves as a sort of Portfolio to show what I can do. <br />
                    <br /> 
                    The codebase for this can be found in the code tab and is fully public, allowing you to see both the CSS and the JS behind it. <br /> 
                    <br /> 
                    The design of the site was also completely done by me. While I don't think it's going to win any awards I wanted something colorful and interesting,  <br /> 
                    as well as something that let me flex a bit of my ideas and skills.   <br /> 
                </div>
                <div className="text center">
                    At any rate it will stand as a reflection of my abilities and it was a fun project to work on for the days it took to get it right.
                </div>
            </div>
        )
    }
}