
import { useLoaderData } from "react-router-dom";
import Bennar from "../Banner/Bennar";
import EventCard from "./EventCard";


const Home = () => {

    const events = useLoaderData();

    return (
		<>
			<Bennar></Bennar>
			<div className="my-4">
				<h2 className="text-3xl font-bold text-center">Our event services</h2>
				<div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{events.map((oneEvent) => (
						<EventCard
							key={oneEvent.id}
							events={oneEvent}
						></EventCard>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;