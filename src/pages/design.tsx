import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive, toggleInactiveClass } from "../js_func/DOM_funcs";

export default class Design extends React.Component {

    componentDidMount(): void {
        setActive("design");
        setColorClass("content", "blue");
        setBGColor("--main-blue");
        setBorderRad("content", ["bl_round", "tl_round"]);
        toggleInactive("content");
        toggleInactiveClass("tgl-me");
    }

    render() {
        return (
            <div className="trans">
                <span className="fancy-dora font-brush font-largest title tgl-me" id="fancy-dora">Design and CSS</span> <h1 className="title-right inline tgl-me">by me!</h1>
                <div className="text tgl-me">
                    All the design on this page was thought of and written by me exclusively! <br />
                    <br />
                    <span className="font-large fancy-lora tgl-me"> This means I did: </span> <br />
                    <ul className="list tgl-me">
                        <li className="entry">Initial design for the look of the website.</li>
                        <li className="entry">Setting up the animations for everything on the page using keyframes and transitions.</li>
                        <li className="entry">Picking the color palette and writing the <span className="fancy-lora tgl-me">JS</span> and <span className="fancy-dora tgl-me">CSS</span> that handles the switching of colors.</li>
                        <li className="entry">Ensuring the classes work for every single sub-element in use on the site.</li>
                    </ul>
                </div>
                <div className="text tgl-me">
                    <span className="font-large fancy-lora tgl-me"> I also did the design for my main website:</span>
                    <ul className="list tgl-me">
                        <li className="entry">Navbar design at the top and footer at the bottom.</li>
                        <li className="entry">Fetching data to state, state management, dynamic component rendering from the fetched data.</li>
                        <li className="entry">Mobile design including a mobile only menu.</li>
                        <li className="entry">Reusable classes to make adding to the site easier.</li>
                    </ul>
                </div>
                <div className="text center tgl-me last">
                    Currently this site is roughtly <span className="fancy-dora tgl-me last">33% CSS</span> compared to the <span className="fancy-lora tgl-me last">66% JS (as TSX) and React</span> part. <br />
                </div>
            </div>
        )
    }
}