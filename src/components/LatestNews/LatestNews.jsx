import { useLoaderData } from "react-router-dom";
import LatestNewsCard from "./latestNewsCard";

const LatestNews = () => {
	const latestNews = useLoaderData();
    return (
		<div className="md:col-span-2 border">
			{latestNews.map((oneNews) => (
				<LatestNewsCard key={oneNews.id} news={oneNews}></LatestNewsCard>
			))}
		</div>
	);
};

export default LatestNews;