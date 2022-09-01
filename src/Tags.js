import Tag from "./Tag";
const Tags = ({ data, activeIndex }) => {
	return (
		<div
			className="bg-white 
		 rounded-[20px]
		p-2  w-full "
		>
			{data.map((tag, index) => {
				const isActive = activeIndex === index;
				return (
					<Tag
						key={index}
						word={tag}
						isActive={isActive}
						isInteractive={true}
						ind={index}
					/>
				);
			})}
		</div>
	);
};

export default Tags;
