import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import AddFeedback from "./AddFeedback";
import FeedbackPage from "./FeedbackPage";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/addfeedback" exact element={<AddFeedback />} />
					<Route path="/feedbackpage/:id" exact element={<FeedbackPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
