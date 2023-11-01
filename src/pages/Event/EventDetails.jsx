import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneEvent from "./OneEvent";


const EventDetails = () => {
    const { id } = useParams();
	const events = useLoaderData();
	const [oneEvent, setOneEvent] = useState({});

    useEffect(() => {
		const findEvent = events?.find( 
			(oneEvent) => oneEvent.id === parseInt(id)
		);
		setOneEvent(findEvent);
	}, [id, events]);

    return (
        <div>
            <OneEvent oneEvent={oneEvent}></OneEvent>
        </div>
    );
};

export default EventDetails;