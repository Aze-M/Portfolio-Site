import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive, toggleInactiveClass } from "../js_func/DOM_funcs";

export default class Contact extends React.Component {

    componentDidMount(): void {
        setActive("contact");
        setColorClass("content", "dora");
        setBGColor("--main-d-orange");
        setBorderRad("content", ["tl_round"]);
        toggleInactive("content");
        toggleInactiveClass("tgl-me")
    }


    render() {
        return (
            <div className="trans">
                <h1 className="title-center fancy-blue tgl-me first">How to reach me!</h1>
                <div className="text tgl-me">
                    As with many people, the best way to reach me is to write me an email: <br /> <a href="mailto://christian.dirks.95@gmail.com" target="_blank" className="tgl-me">Mail to christian.dirks.95@gmail.com</a> <br />
                    <br />
                </div>
                <div className="text tgl-me">
                    Additionally you can find me on LinkedIn: <br />
                    <a href="https://www.linkedin.com/in/christian-dirks-145959209/" className="tgl-me">Christian Dirks on LinkedIn</a> <br />
                    <br />
                    If you for some reason need to reach me quickly, simply stating as much in the title of your email will get you that, or alternatively you can mark the e-mail as important.
                </div>
                <div className="text tgl-me">
                    Want to see some more of what I can do code wise? You can also find me on leetcode: <br /> <a href="https://leetcode.com/Aze-M/" target="_blank" className="tgl-me">Aze-M on LeetCode.com</a> <br />
                    <br />
                    Whenever I'm not actively working on something else, like this site or my main site, I grab a random problem from the site and solve it as a challenge. <br />
                    <br />
                    Finally, for any kind of casual contact, you can also find me on Twitter: <br /> <a href="https://twitter.com/Aze_EDM" target="_blank" className="tgl-me">Aze-M on Twitter.com</a> <br />
                    <br />
                </div>
                <div className="text center tgl-me last">
                    Hopefully this site gave you more of an Idea of what I can do with CSS HTML JS TS and React.<br />
                    If you need any more convincing why not check out my <a href="https://aze-m.com" target="_blank" className="tgl-me last">main site!</a>
                </div>
            </div>
        )
    }
}