

const LatestNewsCard = ({news}) => {
	const {name, published_date, latestNews} = news;
    return (
		<div className="mb-4" data-aos="fade-up">
			<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				{/* <img
					className="object-cover w-full rounded-t-lg h-auto md:rounded-none"
					src={image_url}
					alt=""
				/> */}
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{name}
					</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{latestNews}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LatestNewsCard;