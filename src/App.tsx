import React from 'react'
import { HashRouter, Outlet, Route, Link } from 'react-router-dom';
import './App.css'

function setActive(el: string) {
	for(let el of document.getElementsByClassName("button")) {
		el.classList.remove("active");
	}
	document.getElementById(el)?.classList.add("active");
}

function App() {

	if (/(.com)+\/+/.test(window.location.pathname)) {
		window.location.href = "/#/home";
	}

	return (
		<div className="App">
			<div className="grid-container">
				<nav className="left">
					<ul className="menu nopm">
						<li className="button" id="home" onClick={() => { setActive("home") }}><Link to="/home">Home</Link></li>
						<li className="button" id="design" onClick={() => { setActive("design")}}><Link to="/design">Design</Link></li>
						<li className="button" id="code"><Link to="Code">Code</Link></li>
						<li className="button" id="contact"><Link to="Contact">Contact</Link></li>
					</ul>
				</nav>
				<div className="right nopm">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	)
}

export default App
