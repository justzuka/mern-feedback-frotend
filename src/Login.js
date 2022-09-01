import { useState, useEffect } from "react";
import { loginUser } from "./api";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			window.location.href = "/";
		}
	}, []);
	const LoginUser = async () => {
		if (!email || !password) {
			alert("all fields must be filled");
			return;
		}
		const res = await loginUser({ email, password });

		if (res.data.status === "error") {
			alert(res.data.message);
		} else {
			if (res.data) {
				localStorage.setItem("token", res.data.data);
				localStorage.setItem("userId", res.data.userId);
				localStorage.setItem("name", res.data.name);

				window.location.href = "/";
			} else {
				alert("Please check your username and password");
			}
		}
	};

	return (
		<div
			className="w-full h-screen items-center 
            flex
            flex-cols gap-1
        bg-bgColor"
		>
			<div
				className="m-auto flex
            flex-col items-center
            gap-4"
			>
				<div>Login Here</div>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					className="p-1"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className="p-1"
				/>
				<button
					onClick={LoginUser}
					className="
                bg-pinkButton
                w-[100%] rounded
                hover:brightness-75
                text-white
                py-1
                "
				>
					Login
				</button>
				<button
					onClick={() => (window.location.href = "/register")}
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
					Register
				</button>
			</div>
		</div>
	);
};

export default Login;
