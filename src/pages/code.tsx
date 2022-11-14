import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive, toggleInactiveClass } from "../js_func/DOM_funcs";

export default class Code extends React.Component {

    componentDidMount(): void {
        setActive("code");
        setColorClass("content", "lora");
        setBGColor("--main-l-orange");
        setBorderRad("content", ["bl_round", "tl_round"]);
        toggleInactive("content");
        toggleInactiveClass("tgl-me");
    }


    render() {
        return (
            <div className="trans">
                <h1 className="title-center font-brush font-largest fancy-dora inline tgl-me first">Coded</h1><span className="title-center fancy-blue inline tgl-me first"> in Typescript for Javascript</span>
                <div className="text tgl-me">
                    In addition to using the react-router-dom package, as well as vite to set up dev server and the basic codebase, <br />
                    a few vanilla JS (also in Typescript) functions have been written to handle the DOM manipulation. <br />
                    <br />
                    The use of React to make this just made making a lot of transitions on the page easier, as the base HTML never changes this also lets the background animation simply keep flowing and change color smoothly. <br />
                    <br />
                    The <span className="fancy-blue tgl-me">componentDidMount()</span> function handles all of the class adding that results in CSS morphing the website from page to page. <br />
                    <br />
                </div>
                <div className="center tgl-me">Why not try a few more animated background colors?</div>
                <div className="colorsel tgl-me">
                    <button className="color purple tgl-me last" onClick={() => setBGColor("--cd-purple")}></button>
                    <button className="color dred tgl-me last" onClick={() => setBGColor("--cd-d-red")}></button>
                    <button className="color dgreen tgl-me last" onClick={() => setBGColor("--cd-d-green")}></button>
                </div>
                <div className="text tgl-me last">
                    <br />
                    With the exception of the image of my lovely face in the home tab, every style change involves some form of JS function.
                </div>
                <div className="text center tgl-me last">
                    All the code for this site can be found <a href="https://github.com/Aze-M/Portfolio-Site" target="_blank" className="cd-link tgl-me">here!</a>
                </div>
            </div>
        )
    }
}