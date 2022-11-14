import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Code extends React.Component {

    componentDidMount(): void {
        setActive("code");
        setColorClass("content", "lora");
        setBGColor("--main-l-orange");
        setBorderRad("content", ["bl_round", "tl_round"]);
        toggleInactive("content");
    }


    render() {
        return (
            <div className="trans">
                This is a test for routing Code
            </div>
        )
    }
}