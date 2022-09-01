import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import Tag from "./Tag";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
const Feedback = ({
	commentCount,
	voteCount,
	head,
	info,
	tag,
	_id,
	userIdsLiked,
	isCommentInteractive = true,
}) => {
	const [isLiked, setIsLiked] = useState(false);
	const [voteCountOffset, setVoteCountOffset] = useState(0);
	const { Like, UnLike } = useGlobalContext();
	const CommentsClicked = () => {
		if (isCommentInteractive) {
			window.location.href = `/feedbackpage/${_id}`;
		}
	};
	const ToggleLike = () => {
		if (!isLiked) {
			setVoteCountOffset(voteCountOffset + 1);
			Like(_id);
		} else {
			setVoteCountOffset(voteCountOffset - 1);
			UnLike(_id);
		}
		setIsLiked(!isLiked);
	};
	useEffect(() => {
		const userId = localStorage.getItem("userId");
		if (userIdsLiked.includes(userId)) {
			setIsLiked(true);
		}
	}, []);
	return (
		<div
			className="w-full bg-white rounded-lg flex 
		justify-between items-center
		p-2
		px-4 "
		>
			<div className="flex gap-6">
				<button
					onClick={ToggleLike}
					className={`w-[35px] h-[50px] 
				flex flex-col 
				items-center rounded-lg justify-center
				mb-10 group
				transition-all
				${isLiked ? `bg-bgDarkBlue` : `bg-tagBgColor hover:translate-y-[-5px]`}`}
				>
					<MdKeyboardArrowUp className="text-tagTextColor" />
					<div
						className={`
					transition-all
					font-[500] 
					${isLiked ? `text-white` : `text-bgDarkBlue`}
					`}
					>
						{voteCount + voteCountOffset}
					</div>
				</button>
				<div
					className="flex flex-col
			items-start w-[450px] "
				>
					<div
						className="
					text-bgDarkBlue
					font-[700]"
					>
						{head}
					</div>
					<div className="text-gray-400 font-[400]">{info}</div>
					<Tag word={tag} isActive={false} isInteractive={false} />
				</div>
			</div>

			<div
				className="flex items-center 
			justify-center"
			>
				<button
					onClick={CommentsClicked}
					className={`text-gray-300 
				 
				flex justify-center
				items-center
				gap-2
				transition-all
				duration-500
				p-2 rounded-md
				
				${
					isCommentInteractive
						? "group hover:scale-[1.5] hover:bg-bgDarkBlue bg-bgDarkBlue/[.05] hover:text-white "
						: "cursor-default"
				} 
				`}
				>
					<BsFillChatFill />
					<div
						className={`
					text-bgDarkBlue
					font-[500] justify-center
					transition-all
					${isCommentInteractive ? "group-hover:text-white" : ""}
					`}
					>
						{commentCount}
					</div>
				</button>
			</div>
		</div>
	);
};

export default Feedback;
