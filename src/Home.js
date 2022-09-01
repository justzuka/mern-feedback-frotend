import { useEffect } from "react";

import GradientName from "./GradientName";
import Tags from "./Tags";
import SignOut from "./SignOut";
import TopBar from "./TopBar";
import Feedbacks from "./Feedbacks";
import { useGlobalContext } from "./context";
import Loader from "./Loader";
const Home = () => {
	const { GetFeedbacks, GetName, loadingFeedbacks, activeIndex, dataTags } =
		useGlobalContext();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			GetName();
			GetFeedbacks();
		} else {
			window.location.href = "/login";
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
			<div className="flex items-center">
				<div
					className="w-[200px] flex 
				flex-col gap-5"
				>
					<GradientName></GradientName>
					<Tags data={dataTags} activeIndex={activeIndex}></Tags>
					<SignOut />
				</div>
			</div>
			<div className="flex items-center">
				<div
					className="w-[600px] flex 
				flex-col gap-5"
				>
					<TopBar />

					{loadingFeedbacks ? <Loader /> : <Feedbacks />}
				</div>
			</div>
		</div>
	);
};

export default Home;
