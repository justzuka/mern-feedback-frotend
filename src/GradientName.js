import { useGlobalContext } from "./context";
import Loader from "./Loader";
const GradientName = () => {
	const { name, loadingName } = useGlobalContext();
	return (
		<div
			className="bg-bgButtonPink/[.5]
				 h-[120px] rounded-[20px]
				 
				 p-2 items-center 
				 flex
				 "
		>
			<div className="mx-auto ">
				{loadingName ? (
					<Loader />
				) : (
					<div
						className="text-white
				font-[600] text-[20px] "
					>
						{name}
					</div>
				)}
			</div>
		</div>
	);
};

export default GradientName;
