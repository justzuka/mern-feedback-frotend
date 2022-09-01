import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { AiOutlineLoading } from "react-icons/ai";
import "./Loader.css";
const Loader = () => {
	return (
		<div className="relative flex items-center justify-center">
			<AiOutlineLoading3Quarters size={22} className="inner" />
			<AiOutlineLoading size={30} className="outer" />
		</div>
	);
};

export default Loader;
