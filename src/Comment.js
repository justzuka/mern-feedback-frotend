const Comment = ({ name, info }) => {
	return (
		<div className="w-full p-4">
			<div className="pl-5 w-full">
				<div
					className="text-bgDarkBlue
            font-[600] text-[20px] w-full"
				>
					{name}
				</div>
				<div className="text-gray-400 w-full break-words">{info}</div>
			</div>
			<div className="w-full h-[.5px] bg-gray-400/[.2] mt-4"></div>
		</div>
	);
};

export default Comment;
