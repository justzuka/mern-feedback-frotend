import { useState, useEffect } from "react";
import { registerUser } from "./api";
const Register = () => {
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const RegisterUser = async () => {
		if (!name || !email || !password) {
			alert("all fields must be filled");
			return;
		}
		const res = await registerUser({ name, email, password });
		console.log(res);
		if (res.data.status === "error") {
			alert(res.data.message);
		} else {
			alert("all good");
			console.log(res.data.data);
			setName("");
			setEmail("");
			setPassword("");
			window.location.href = "/login";
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			window.location.href = "/";
		}
	}, []);
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
				<div>Register Here</div>
				<input
					type="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
					className="p-1"
				/>
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
					onClick={RegisterUser}
					className="
                bg-pinkButton
                w-[100%] rounded
                hover:brightness-75
                text-white
                py-1 transition-all
                "
				>
					Register
				</button>
				<button
					onClick={() => (window.location.href = "/login")}
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
					login
				</button>
			</div>
		</div>
	);
};

export default Register;
