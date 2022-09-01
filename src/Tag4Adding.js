const Tag4Adding = ({ word, isActive, isInteractive, ind, TagClicked }) => {
	return (
		<button
			onClick={() => TagClicked(ind)}
			className={`
			rounded-[20px] p-1
			px-4 float-left
			my-1
			mx-[3px]
			${
				isInteractive
					? `hover:bg-tagSelectedColor
			hover:text-white`
					: "cursor-default"
			}
			

			transition-all
			${
				isActive
					? "bg-tagSelectedColor text-white"
					: "text-tagTextColor bg-tagBgColor"
			}
				`}
		>
			{word}
		</button>
	);
};

export default Tag4Adding;
