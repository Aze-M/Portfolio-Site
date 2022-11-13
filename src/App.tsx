import React from 'react'
import { HashRouter, Outlet, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

	return (
		<HashRouter>
			<div className="App">
				<nav className="left">
					<ul className="menu">
						<li className="button"></li>
						<li className="button"></li>
						<li className="button"></li>
						<li className="button"></li>
					</ul>
				</nav>
				<div className="right">
					<Outlet></Outlet>
				</div>
			</div>
		</HashRouter>
	)
}

export default App
