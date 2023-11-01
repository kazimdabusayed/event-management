import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex flex-row justify-center min-h-screen">
				<span className="loading loading-ball loading-xs"></span>
				<span className="loading loading-ball loading-sm"></span>
				<span className="loading loading-ball loading-md"></span>
				<span className="loading loading-ball loading-lg"></span>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node,
};
