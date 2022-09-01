import Comment from "./Comment";
const Comments = ({ comments, commentCount }) => {
	return (
		<div
			className="w-full bg-white flex flex-col
            p-2 px-3
        "
		>
			<div
				className="text-[25px] 
            font-[800] text-bgDarkBlue"
			>
				{commentCount} Comments
			</div>
			{comments.map((comment, index) => {
				const { name, info } = comment;
				return <Comment key={index} name={name} info={info} />;
			})}
		</div>
	);
};

export default Comments;
