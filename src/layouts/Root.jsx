import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Navber/Nav";

const Root = () => {
    return (
		<>
			<div className="max-w-6xl mx-auto my-3">
				<Nav></Nav>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Root;