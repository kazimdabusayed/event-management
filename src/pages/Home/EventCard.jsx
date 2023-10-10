import { Link } from "react-router-dom";


const EventCard = ({events}) => {
    const { id, name, image, price, description } = events ;
    return (
		<div className="block rounded-lg dark:bg-neutral-700 card max-w-sm md:max-w-lg mx-auto bg-base-100 shadow-xl">
			<a href="#!">
				<img className="rounded-t-lg" src={image} alt="" />
			</a>
			<div className="p-6">
				<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
					{name}
				</h5>
				<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
					{description}
				</p>
				<Link
					to={`/events/${id}`}
					type="button"
					className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-6 py-3"
				>
					See More
				</Link>
			</div>
		</div>
	);
};

export default EventCard;