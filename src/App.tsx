import React from 'react'
import { HashRouter, Outlet, Route, Link } from 'react-router-dom';
import { setActive, setColorClass, setBorderRad, toggleInactive } from './js_func/DOM_funcs';
import './App.css'



function App() {

	if (!/\#+/.test(window.location.href)) {
		window.location.href = "/#/home";
	}

	return (
		<div className="App">
			<div className="grid-container">
				<nav className="left">
					<ul className="menu nopm">
						<li className="button ngray" id="home" onClick={() => { window.location.href = "/#/home" }}><Link to="/home">Home</Link></li>
						<li className="button blue" id="design" onClick={() => { window.location.href = "/#/design" }}><Link to="/design">Design</Link></li>
						<li className="button lora" id="code" onClick={() => { window.location.href = "/#/code" }}><Link to="Code">Code</Link></li>
						<li className="button dora" id="contact" onClick={() => { window.location.href = "/#/contact" }}><Link to="Contact">Contact</Link></li>
					</ul>
				</nav>
				<div className="right nopm" id="content">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	)
}

export default App
