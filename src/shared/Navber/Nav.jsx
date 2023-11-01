
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {

	const { user, logOut } = useContext(AuthContext);
	
	const handleSignOut = () => {
		logOut()
		.then()
		.catch();
	};

	const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/latestnews">Profile</NavLink></li>
    </>

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-purple-300 to-blue-400 rounded-box w-52"
					>
						{navLinks}
					</ul>
				</div>
				<a href="/" className="btn normal-case text-xl">
					EventHub
				</a>
			</div>
			<div className="navbar-center hidden md:flex">
				<ul className="menu menu-horizontal px-1 gap-2 text-lg font-semibold">
					{navLinks}
				</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<div className="text-xl text-indigo-700 font-semibold mr-2 hidden md:block">
							{user?.displayName}
						</div>
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar mr-2"
						>
							<div className="w-11 rounded-full">
								<img src={user?.photoURL} />
							</div>
						</label>
						<button
							onClick={handleSignOut}
							className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white"
						>
							Log Out
						</button>
					</>
				) : (
					<Link to="/login">
						<button className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-6 py-3">
							Login
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Nav;