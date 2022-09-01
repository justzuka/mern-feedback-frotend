import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { addFeedback } from "./api";
import Tags4Adding from "./Tags4Adding";
const AddFeedback = () => {
	const [header, setHeader] = useState("");
	const [info, setInfo] = useState("");

	const { dataTags } = useGlobalContext();
	const [activeIndex, setActiveIndex] = useState(0);

	const TagClicked = (index) => {
		setActiveIndex(index);
	};

	const Submit = async () => {
		if (!header || !info) {
			alert("all fields must be filled");
			return;
		}

		const token = localStorage.getItem("token");
		if (!token) {
			window.location.href = "/login";
			return;
		}

		const res = await addFeedback({
			header,
			info,
			tag: dataTags[activeIndex],
			token,
		});

		if (res.data.status === "error") {
			alert(res.data.message);
			localStorage.removeItem("token");
			window.location.href = "/login";
		} else {
			setHeader("");
			setInfo("");
			alert("Submited");
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			window.location.href = "/login";
		}
	}, []);

	return (
		<div
			className="mx-auto w-[200px] h-screen items-center 
        flex
        flex-cols gap-1
        bg-bgColor"
		>
			<div
				className="m-auto flex
        flex-col items-center
        gap-4"
			>
				<div>Add Feedback</div>
				<textarea
					className="w-full h-[50px] p-1"
					value={header}
					placeholder=" Header"
					onChange={(e) => setHeader(e.target.value)}
				></textarea>
				<textarea
					className="w-full h-[200px] p-1"
					value={info}
					placeholder=" Info"
					onChange={(e) => setInfo(e.target.value)}
				></textarea>

				<Tags4Adding
					data={dataTags}
					activeIndex={activeIndex}
					TagClicked={TagClicked}
				/>

				<button
					onClick={Submit}
					className="
            bg-pinkButton
            w-[100%] rounded
            hover:brightness-75
            text-white
            py-1
            "
				>
					Submit
				</button>
				<button
					onClick={() => (window.location.href = "/")}
					className="
            bg-white
            w-[100%] rounded
            hover:bg-bgButtonPink
            hover:text-white
            text-bgButtonPink
            py-1 transition-all
            font-[500]
            "
				>
					Home
				</button>
			</div>
		</div>
	);
};

export default AddFeedback;
