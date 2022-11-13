//Functional imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

//Main Layout import
import App from './App'

//Subpage import
import Code from './pages/code'
import Contact from './pages/contact'
import Design from './pages/design'
import Home from './pages/home'

import './index.css'

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [{
			path : "/home",
			element: <Home />
		},{
			path: "/design",
			element: <Design/>
		}, {
			path: "/code",
			element: <Code />,
		}, {
			path: "/contact",
			element: <Contact/>
		}]
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
