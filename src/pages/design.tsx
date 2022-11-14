import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive, toggleInactiveClass } from "../js_func/DOM_funcs";

export default class Design extends React.Component {

    componentDidMount(): void {
        setActive("design");
        setColorClass("content", "blue");
        setBGColor("--main-blue");
        setBorderRad("content", ["bl_round", "tl_round"]);
        toggleInactive("content");
        toggleInactive("fancy-dora");
        toggleInactiveClass("font-lora");
    }

    render() {
        return (
            <div className="trans">
                <span className="fancy-dora font-brush title" id="fancy-dora">Design and CSS</span> <h1 className="title-right inline">by me!</h1>
                <div className="text">
                    All the design on thsi page was thought of and written by me exclusively; <br />
                    <br />
                    <span className="font-large font-lora"> This means I did: </span> <br />
                    <ul className="list">
                        <li className="entry">Initial design for the look of the website.</li>
                        <li className="entry">Setting up the Animations for everything on the page using keyframes and transitions.</li>
                        <li className="entry">Picking the color palette and writing the JS and CSS that handles the switching of colors.</li>
                        <li className="entry">Ensuring the classes work for every single sub-element in use on the site.</li>
                    </ul>
                </div>
                <div className="text">
                    I also did the design for the main website; <br />
                    <br />
                    <span className="font-large font-lora">This adds:</span>
                    <ul className="list">
                        <li className="entry">Navbar design for a top bound nav menu.</li>
                        <li className="entry">Footer design fixed at the very bottom of the page.</li>
                        <li className="entry">Mobile design including a mobile only menu.</li>
                        <li className="entry">Highly reusable class design to make designing the site easier.</li>
                    </ul>
                </div>
                <div className="text center">
                    Currently this site is roughtly <span className="font-lora">33%</span> CSS compared to the <span className="font-lora">66%</span> JS (as TSX) and React part. <br />
                </div>
            </div>
        )
    }
}