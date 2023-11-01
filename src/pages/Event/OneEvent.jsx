import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OneEvent = ({ oneEvent }) => {
	const { name, image, price, description } = oneEvent || {};
	return (
		<div className="min-h-screen bg-inherit  py-4 md:py-6 lg:py-8">
			<div className="container mx-auto border rounded-md">
				<div className="relative m-4">
					<img src={image} className="w-full h-full block blur-sm" />
					<div className="absolute z-10 top-12 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start ">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-sky-600 sm:w-8/12">
							{name}
						</h1>
						<p className="text-base leading-normal text-sky-500 mt-4 sm:mt-5 sm:w-5/12">
							{description}
						</p>
						<p className="text-white text-lg font-bold m-4">
							Cost:{" "}
							<span className="badge badge-info badge-outline">
								{price}
							</span>
						</p>
						<Link to='/' className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-6 py-3">
							Back to home page
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneEvent;

OneEvent.propTypes = {
	oneEvent: PropTypes.node,
};