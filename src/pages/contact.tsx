import React from "react";
import { setActive, setBGColor, setBorderRad, setColorClass, toggleInactive, toggleInactiveClass } from "../js_func/DOM_funcs";

export default class Contact extends React.Component {

    componentDidMount(): void {
        setActive("contact");
        setColorClass("content", "dora");
        setBGColor("--main-d-orange");
        setBorderRad("content", ["tl_round","bl_round"]);
        toggleInactive("content");
        toggleInactiveClass("tgl-me")
    }


    render() {
        return (
            <div className="trans">
                <h1 className="title-center fancy-blue tgl-me first">How to reach me!</h1>
                <div className="text center tgl-me">
                    As with many people, the best way to reach me is to <span className="fancy-blue tgl-me">write me an email:
                        <br /> <a href="mailto://christian.dirks.95@gmail.com" target="_blank" className="tgl-me">Mail to christian.dirks.95@gmail.com</a> <br />
                        <br />
                    </span>
                </div>
                <div className="text center tgl-me">
                    Additionally you can find me on <span className="fancy-blue tgl-me">LinkedIn: <br />
                        <a href="https://www.linkedin.com/in/christian-dirks-145959209/" className="tgl-me">Christian Dirks on LinkedIn</a> <br />
                        <br />
                    </span>
                    If you for some reason need to reach me quickly, simply stating as much in the title of your email will get you that, or alternatively you can mark the e-mail as important.
                </div>
                <div className="text center tgl-me">
                    Want to see some more of what I can do code wise? <br /> You can also find me on <span className="fancy-blue tgl-me">LeetCode:
                        <br /> <a href="https://leetcode.com/Aze-M/" target="_blank" className="tgl-me">Aze-M on LeetCode.com</a> <br />
                        <br />
                    </span>
                    Whenever I'm not actively working on something else, like this site or my main site, I grab a random problem from the site and solve it as a challenge. <br />
                    <br />
                    Finally, for any kind of casual contact, you can also find me on <span className="fancy-blue tgl-me">Twitter:
                        <br /> <a href="https://twitter.com/Aze_EDM" target="_blank" className="tgl-me">Aze-M on Twitter.com</a> <br />
                        <br />
                    </span>
                </div>
                <div className="text center tgl-me last">
                    Hopefully this site gave you more of an Idea of what I can do with <span className="fancy-blue tgl-me last">CSS HTML JS TS and React.</span> <br />
                    <br />
                    If you need any more convincing why not check out my <a href="https://aze-m.com" target="_blank" className="tgl-me last">main site!</a>
                </div>
            </div>
        )
    }
}