import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Bennar = () => {
	const { user } = useContext(AuthContext);
    return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://i.ibb.co/wRpTYtF/Tech-Conferences-and-Expos.jpg"
					className="shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">
						Welcome to the Ultimate Tech and Gaming Events Hub
					</h1>
					<p className="py-6">
						Explore the Future of Technology and Gaming Discover a
						world where innovation meets entertainment. Dive into
						immersive Virtual Reality experiences, sharpen your tech
						skills in workshops, compete in thrilling gaming
						tournaments, and celebrate excellence at awards shows.
						Join us on a journey where tech enthusiasts and gamers
						unite.
					</p>
					{!user && (
						<>
							<Link
								to="/register"
								className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-6 py-3 "
							>
								Get Started
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Bennar;