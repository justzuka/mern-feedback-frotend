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
			className="w-full md:w-screen h-screen 
	bg-bgColor md:flex md:items-start
	md:py-10 justify-center 
	md:gap-4
	md:px-2
	"
		>
			<div
				className="md:flex md:items-center
			 my-5 md:m-0 px-10 md:px-0"
			>
				<div
					className="w-full mdlg:w-[200px] flex 
				flex-col gap-5 mx-auto md:mx-0"
				>
					<GradientName></GradientName>
					<Tags data={dataTags} activeIndex={activeIndex}></Tags>
					<SignOut />
				</div>
			</div>
			<div
				className="md:flex md:items-center
			px-10  md:px-0"
			>
				<div
					className="md:w-[600px] flex 
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
