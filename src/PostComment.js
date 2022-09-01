import { useState } from "react";
import { addComment } from "./api";
const MAX_CHARACTERS = 250;
const PostComment = ({ addCommentArray, id }) => {
	const [info, setInfo] = useState("");
	const [charactersLeft, setCharactersLeft] = useState(MAX_CHARACTERS);
	const postClicked = async () => {
		if (!info) {
			alert("say something first");
			return;
		}
		const token = localStorage.getItem("token");
		const name = localStorage.getItem("name");
		console.log(`name: ${name}`);
		const feedbackId = id;
		const iinfo = "" + info;
		setInfo("");
		setCharactersLeft(MAX_CHARACTERS);
		addCommentArray({ name, info: iinfo });

		const res = await addComment({ token, _id: feedbackId, info: iinfo });
		if (res.data.status === "error") {
			localStorage.removeItem("token");
			window.location.href = "/login";
		} else {
			console.log("added");
		}
	};

	const OnValueChange = (e) => {
		const value = e.target.value;
		const length = value.length;
		if (length > MAX_CHARACTERS) {
		} else {
			setInfo(value);
			setCharactersLeft(MAX_CHARACTERS - length);
		}
	};

	return (
		<div
			className="w-full bg-white
    flex flex-col p-4 my-1 rounded-sm gap-2
    mb-2"
		>
			<div
				className="text-[25px] 
            font-[800] text-bgDarkBlue"
			>
				Add Comment
			</div>
			<textarea
				name="text"
				cols="20"
				rows="5"
				placeholder="Type comment here"
				value={info}
				onChange={(e) => OnValueChange(e)}
				className="bg-gray-100 p-1 rounded-md"
			></textarea>

			<div
				className="flex justify-between
            items-center"
			>
				<div className="text-gray-400 font-[300]">
					{charactersLeft} characters left
				</div>

				<button
					onClick={postClicked}
					className="bg-bgButtonPink p-2 px-6
                text-white rounded-lg font-[500]
                hover:brightness-75"
				>
					Post Comment
				</button>
			</div>
		</div>
	);
};

export default PostComment;
