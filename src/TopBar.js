import { RiLightbulbFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useGlobalContext } from "./context";

const TopBar = () => {
	const { totalPages, currentPage, NextPage, PrevPage } = useGlobalContext();
	return (
		<div
			className="w-full
	bg-bgDarkBlue flex
	justify-between items-center
	p-1 rounded-md
	px-2
	"
		>
			<div
				className="flex items-center
			gap-2"
			>
				<RiLightbulbFill color="white" size={25} />
				<h2
					className="text-white
				font-[500]"
				>
					Total Pages: {totalPages}
				</h2>
			</div>
			<div
				className="text-white
				font-[500] flex items-center
				justify-center gap-2"
			>
				<button
					onClick={PrevPage}
					className="transition-all group hover:bg-bgButtonPink
				 p-2 rounded-lg"
				>
					<MdKeyboardArrowLeft
						className="text-gray-400
					scale-[2] group-hover:text-white"
					/>
				</button>
				<div
					className="text-[20px] mb-[2px] 
				text-white"
				>
					{currentPage + 1}
				</div>
				<button
					onClick={NextPage}
					className="transition-all group hover:bg-bgButtonPink
				 p-2 rounded-lg"
				>
					<MdKeyboardArrowRight
						className="text-gray-400
					scale-[2] group-hover:text-white"
					/>
				</button>
			</div>
			<button
				onClick={() => (window.location.href = "/addfeedback")}
				className="bg-bgButtonPink
				hover:bg-bgButtonPink/[.5]
				hover:text-white/[.5]
			p-1 px-4
			transition-all
			m-1 rounded-md
			text-white"
			>
				+ Add Feedback
			</button>
		</div>
	);
};

export default TopBar;
