import React from "react";
import { setActive, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Home extends React.Component {

    componentDidMount(): void {
        setActive("home");
        setColorClass("content", "ngray");
        setBorderRad("content", ["bl_round"])
        toggleInactive("content");
    }

    render() {
        return (
            <div className="trans" id="homecnt">
                <h1 className="title">Christian Dirks, <div className="fancy">Web-Dev</div></h1>
                <div className="text"></div>
                <div className="img"></div>
            </div>
        )
    }
}