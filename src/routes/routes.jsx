import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import EventDetails from "../pages/Event/EventDetails";
import About from "../components/About/About";
import LatestNews from "../components/LatestNews/LatestNews";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/fakeData.json"),
			},
			{
				path: "/",
				element: <LatestNews/>,
				loader: () => fetch("/latestNews.json"),
			},
			{
				path: "/events/:id",
				element: (
					<PrivateRoute>
						<EventDetails />
					</PrivateRoute>
				),
				loader: () => fetch("/fakeData.json"),
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/about",
				element: (
					<PrivateRoute>
						<About/>
					</PrivateRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
