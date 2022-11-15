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
                <div className="text center tgl-me">
                    In addition to using the <span className="fancy-blue tgl-me">react-router-dom</span> package, as well as <span className="fancy-blue tgl-me">Vite</span> to set up dev server and the basic codebase,
                    a few vanilla <span className="fancy-dora tgl-me">JS</span> (also in Typescript) functions have been written to handle the DOM manipulation. <br />
                    <br />
                    The use of <span className="fancy-blue tgl-me">React</span> to make this just made making a lot of transitions on the page easier, as the base HTML never changes this also lets the background animation simply keep flowing and change color smoothly. <br />
                    <br />
                    The <span className="fancy-blue tgl-me">componentDidMount()</span> function handles all of the class adding that results in <span className="fancy-dora tgl-me">CSS</span> morphing the website from page to page. <br />
                    <br />
                </div>
                <div className="center tgl-me">Why not try a few more animated background colors?</div>
                <div className="colorsel tgl-me">
                    <button className="color purple tgl-me last" onClick={() => setBGColor("--cd-purple")}></button>
                    <button className="color dred tgl-me last" onClick={() => setBGColor("--cd-d-red")}></button>
                    <button className="color dgreen tgl-me last" onClick={() => setBGColor("--cd-d-green")}></button>
                </div>
                <div className="text center tgl-me last">
                    <br />
                    With the exception of the image of my lovely face in the home tab, every style change involves some form of <span className="fancy-dora tgl-me">JS</span> function.
                </div>
                <div className="text center font-larger tgl-me last">
                    <br></br>
                    All the code for this site and misc projects can be found <a href="https://github.com/Aze-M/" target="_blank" className="cd-link fancy-blue tgl-me">here!</a>
                </div>
            </div>
        )
    }
}