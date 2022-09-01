import React, { useState, useContext, useEffect } from "react";
import { getUserName, getFeedbacks, like, unLike } from "./api";
import { useCallback } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [dataFeedbacks, setDataFeedbacks] = useState([]);
	const [name, setName] = useState("");
	const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);
	const [loadingName, setLoadingName] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);
	const [dataTags, setDataTags] = useState([
		"All",
		"UI",
		"UIX",
		"Feature",
		"Bug",
		"Enhencement",
	]);

	const TagClicked = (index) => {
		setActiveIndex(index);
	};

	const GetFeedbacks = async () => {
		setLoadingFeedbacks(true);
		const token = localStorage.getItem("token");
		const res = await getFeedbacks(
			{ token: token, tag: dataTags[activeIndex] },
			currentPage
		);

		if (res.data.status === "error") {
			localStorage.removeItem("token");
			window.location.href = "/login";
		} else {
			setTotalPages(res.data.data.totalPages);
			setDataFeedbacks(res.data.data.feedbacks);
			setLoadingFeedbacks(false);
		}
	};

	const Like = async (_id) => {
		const token = localStorage.getItem("token");
		const res = await like({ token: token, _id });

		if (res.data.status === "error") {
			if (res.data.message === "invalid token") {
				localStorage.removeItem("token");
				window.location.href = "/login";
			} else {
				alert(res.data.message);
			}
		}
	};
	const UnLike = async (_id) => {
		const token = localStorage.getItem("token");
		const res = await unLike({ token: token, _id });

		if (res.data.status === "error") {
			if (res.data.message === "invalid token") {
				localStorage.removeItem("token");
				window.location.href = "/login";
			} else {
				alert(res.data.message);
			}
		}
	};
	const GetName = async () => {
		setLoadingName(true);
		const token = localStorage.getItem("token");
		const res = await getUserName({ token: token });

		if (res.data.status === "error") {
			localStorage.removeItem("token");
			window.location.href = "/login";
		} else {
			setName(res.data.data);
			setLoadingName(false);
		}
	};

	const NextPage = () => {
		const nextpage = (currentPage + 1) % totalPages;
		setCurrentPage(nextpage);
	};
	const PrevPage = () => {
		const prevpage = (currentPage - 1 + totalPages) % totalPages;
		setCurrentPage(prevpage);
	};

	useEffect(() => {
		if (currentPage == 0) {
			if (window.location.pathname === "/") {
				GetFeedbacks();
			}
		} else {
			setCurrentPage(0);
		}
	}, [activeIndex]);

	useEffect(() => {
		if (window.location.pathname === "/") {
			GetFeedbacks();
		}
	}, [currentPage]);
	return (
		<AppContext.Provider
			value={{
				GetName,
				GetFeedbacks,
				dataFeedbacks,
				currentPage,
				totalPages,
				name,
				NextPage,
				PrevPage,
				loadingFeedbacks,
				loadingName,
				activeIndex,
				dataTags,
				TagClicked,
				Like,
				UnLike,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
