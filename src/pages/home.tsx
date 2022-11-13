import React from "react";
import { setActive, setBorderRad, setColorClass, toggleInactive } from "../js_func/DOM_funcs";

export default class Home extends React.Component {

    componentDidMount(): void {
        setActive("home");
        setColorClass("content", "ngray");
        setBorderRad("content", ["bl_round"])
        toggleInactive("content");
        toggleInactive("fancy");    
    }

    render() {
        return (
            <div className="trans" id="homecnt">
                <h1 className="title">Christian Dirks,</h1><h1 className="fancy-lora font-brush" id="fancy">Web-Dev</h1>
                <div className="text"></div>
                <div className="img"></div>
            </div>
        )
    }
}