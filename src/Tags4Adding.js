import Tag4Adding from "./Tag4Adding";
const Tags4Adding = ({ data, activeIndex, TagClicked }) => {
	return (
		<div
			className="bg-white 
		 rounded-[20px]
		p-2  w-full "
		>
			{data.map((tag, index) => {
				const isActive = activeIndex === index;
				return (
					<Tag4Adding
						key={index}
						word={tag}
						isActive={isActive}
						isInteractive={true}
						ind={index}
						TagClicked={TagClicked}
					/>
				);
			})}
		</div>
	);
};

export default Tags4Adding;
