const SignOut = () => {
	const signout = () => {
		localStorage.removeItem("token");
		window.location.href = "/login";
	};
	return (
		<button
			onClick={signout}
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
			Sign Out
		</button>
	);
};

export default SignOut;
