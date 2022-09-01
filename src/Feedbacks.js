import { useGlobalContext } from "./context";
import Feedback from "./Feedback";
const Feedbacks = () => {
	const { dataFeedbacks } = useGlobalContext();
	return (
		<div className="w-full flex flex-col gap-5 items-start">
			{dataFeedbacks.map((feedback) => {
				const { commentCount, voteCount, head, info, tag, _id, userIdsLiked } =
					feedback;
				return (
					<Feedback
						key={_id}
						commentCount={commentCount}
						voteCount={voteCount}
						head={head}
						info={info}
						tag={tag}
						_id={_id}
						userIdsLiked={userIdsLiked}
					/>
				);
			})}
		</div>
	);
};

export default Feedbacks;
