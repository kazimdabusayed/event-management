import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error"
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
        ]
	},
]);

export default router;
