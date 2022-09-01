import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feedback from "./Feedback";
import { getFeedback } from "./api";
import Loader from "./Loader";
import Comments from "./Comments";
import PostComment from "./PostComment";
const FeedbackPage = () => {
	const [voteCount, setVoteCount] = useState(0);
	const [commentCount, setCommentCount] = useState(0);
	const [tag, setTag] = useState("");
	const [head, setHead] = useState("");
	const [info, setInfo] = useState("");
	const [userIdsLiked, setUserIdsLiked] = useState([]);

	const [comments, setComments] = useState([]);
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);

	const addComment = (comment) => {
		const newarr = [...comments];
		newarr.push(comment);

		setComments(newarr);
		setCommentCount(commentCount + 1);
	};

	const GetFeedbackInfo = async () => {
		const token = localStorage.getItem("token");

		const res = await getFeedback({ token, _id: id });

		if (res.data.status === "error") {
			alert(res.data.message);
			localStorage.removeItem("token");
			window.location.href = "/login";
		} else {
			const {
				voteCount,
				commentCount,
				tag,
				head,
				info,
				userIdsLiked,
				comments,
			} = res.data.data;
			setVoteCount(voteCount);
			setCommentCount(commentCount);
			setTag(tag);
			setHead(head);
			setInfo(info);
			setUserIdsLiked(userIdsLiked);
			setComments(comments);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			window.location.href = "/login";
		} else {
			GetFeedbackInfo();
		}
	}, []);

	return (
		<div
			className="w-screen h-screen 
            bg-bgColor flex items-start
            py-10 justify-center
            gap-4 
            "
		>
			{isLoading ? (
				<Loader />
			) : (
				<div className="w-[600px] flex flex-col gap-5">
					<button
						onClick={() => (window.location.href = "/")}
						className="
                            bg-white mx-auto
                            w-[100px] rounded
                            hover:bg-bgButtonPink
                            hover:text-white
                            text-bgButtonPink
                            py-1 transition-all
                            font-[500]
                        "
					>
						Home
					</button>
					<Feedback
						voteCount={voteCount}
						commentCount={commentCount}
						head={head}
						info={info}
						tag={tag}
						userIdsLiked={userIdsLiked}
						_id={id}
						isCommentInteractive={false}
					></Feedback>
					<Comments comments={comments} commentCount={commentCount} />
					<PostComment addCommentArray={addComment} id={id} />
				</div>
			)}
		</div>
	);
};

export default FeedbackPage;
