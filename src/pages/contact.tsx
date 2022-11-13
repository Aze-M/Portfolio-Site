import React from "react";
import { setActive, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Contact extends React.Component {

    componentDidMount(): void {
        setActive("contact");
        setColorClass("content", "dora");
        setBorderRad("content", ["tl_round"])
        toggleInactive("content");
    }


    render() {
        return (
            <div className="trans">
                This is a test for routing Contact
            </div>
        )
    }
}