import axios from "axios";

const url = process.env.REACT_APP_FEEDBACK_API_BASE_URL;
console.log(url);

export const fetchFriends = () => axios.get(url + "/readFriends");
export const insertFriend = (friend) => axios.post(url + "/insert", friend);

export const registerUser = (user) => axios.post(url + "/registerUser", user);
export const loginUser = (user) => axios.post(url + "/loginUser", user);
export const getUserName = (body) => axios.post(url + "/getUserName", body);

export const getFeedbacks = (body, pageNumber) =>
	axios.post(url + `/feedbacks?page=${pageNumber}`, body);

export const addFeedback = (body) => axios.post(url + "/addfeedback", body);

export const like = (body) => axios.post(url + "/like", body);

export const unLike = (body) => axios.post(url + "/unlike", body);

export const addComment = (body) => axios.post(url + "/addcomment", body);

export const getFeedback = (body) => axios.post(url + "/feedback", body);
