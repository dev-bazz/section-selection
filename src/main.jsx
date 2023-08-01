import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Sector } from "./pages";
import AppProvider from "./config/context.jsx";

const router = createBrowserRouter([
	/**
	 * @description: Application Routing System
	 * @documentation: https://reactrouter.com/en/6.14.2/start/overview
	 */
	{
		path: "/",
		element: <App />,
	},
	{
		path: "sector",
		element: <Sector />,
	},
]);

//  Render Application
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>
);
