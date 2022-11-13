import React from "react";
import { setActive, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Design extends React.Component {

    componentDidMount(): void {
        setActive("design");
        setColorClass("content", "blue");
        setBorderRad("content", ["bl_round", "tl_round"])
        toggleInactive("content");
    }

    render() {
        return (
            <div className="trans">
                This is a test for routing Design
            </div>
        )
    }
}