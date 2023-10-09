import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [signupError, setSignupError] = useState("");
	const [success, setSuccess] = useState("");
	const [showPass, setShowPass] = useState(false);
	const [showPassw, setShowPassw] = useState(false);
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		const confirmPassword = form.get("confirmPassword");
		console.log(name, email, password, confirmPassword);

		// reset error and success
		setSignupError("");
		setSuccess("");

		if (password !== confirmPassword) {
			setSignupError("Password don't match.");
			return;
		} else if (password.length < 6) {
			console.log(password.length);
			setSignupError("Password must be at least 6 characters long.");
			return;
		} else if (!/[A-Z]/.test(password)) {
			setSignupError("Password must contain at least one capital letter."
			);
			return;
		} else if (!/[!@#$%^&*]/.test(password)) {
			setSignupError(
				"Password must contain at least one special character."
			);
			return;
		}

		//createUser
		createUser(email, password, confirmPassword, name)
			.then((result) => {
				console.log(result.user);
				setSuccess("User created successfully.");
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
				setSignupError(error.message);
			});
	};

    return (
		<div>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
				<div className="w-full px-6 m-auto bg-white rounded-md lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center text-purple-600">
						Create a new account
					</h1>
					<form onSubmit={handleRegister} className="mt-6">
						<div className="mb-2">
							<label
								htmlFor="name"
								className="block font-semibold text-gray-800"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								autoComplete="name"
								className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label
								htmlFor="email"
								className="block font-semibold text-gray-800"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								autoComplete="email"
								className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label
								htmlFor="password"
								className="block font-semibold text-gray-800"
							>
								Password
							</label>
							<div className="relative">
								<input
									type={showPass ? "text" : "password"}
									name="password"
									id="password"
									className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
								<span
									onClick={() => setShowPass(!showPass)}
									className="absolute text-gray-400 text-lg cursor-pointer top-3 right-3"
								>
									{showPass ? <BsEyeSlash /> : <BsEye />}
								</span>
							</div>
						</div>
						<div className="mb-2">
							<label
								htmlFor="confirmPassword"
								className="block font-semibold text-gray-800"
							>
								Confirm password
							</label>
							<div className="relative">
								<input
									type={showPassw ? "text" : "password"}
									name="confirmPassword"
									id="confirmPassword"
									className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
								<span
									onClick={() => setShowPassw(!showPassw)}
									className="absolute text-gray-400 text-lg cursor-pointer top-3 right-3"
								>
									{showPassw ? <BsEyeSlash /> : <BsEye />}
								</span>
							</div>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
								Register
							</button>
						</div>
					</form>

					{signupError && (
						<p className="text-red-500">{signupError}</p>
					)}
					{success && <p className="text-green-500">{success}</p>}

					<div className="relative flex items-center justify-center w-full mt-6 border border-t border-gray-300">
						<div className="absolute px-5 bg-white">Or</div>
					</div>
					<div className="flex mt-4 gap-x-2">
						<button
							type="button"
							className="flex items-center justify-center w-full p-3 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700"
						>
							<FcGoogle></FcGoogle>
							<p className="ml-3">Google</p>
						</button>
						<button className="flex items-center justify-center w-full p-3 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700">
							<BsGithub></BsGithub>
							<p className="ml-3">GitHub</p>
						</button>
					</div>
					<p className="mt-6 text-base text-center text-gray-800">
						{" "}
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-purple-600 hover:underline"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;