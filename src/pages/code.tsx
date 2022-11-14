import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Code extends React.Component {

    componentDidMount(): void {
        setActive("code");
        setColorClass("content", "lora");
        setBGColor("--main-l-orange");
        setBorderRad("content", ["bl_round", "tl_round"]);
        toggleInactive("content");
        toggleInactive("cd-link");
    }


    render() {
        return (
            <div className="trans">
                All the code for this site can be found <a href="https://github.com/Aze-M/Portfolio-Site" className="cd-link" id="cd-link">here!</a>
            </div>
        )
    }
}