import { Link } from "react-router-dom";
import Nav from "../../shared/Navber/Nav";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		console.log(name, email, password);

	//createUser
		createUser(email, password)
		.then((result) => {
			console.log(result.user);
		})
		.catch((error) => {
			console.error(error);
		});
	};

    return (
		<div>
			<Nav></Nav>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
				<div className="w-full px-6 py-3 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center text-purple-700 underline">
						Register
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
							<input
								type="password"
								name="password"
								className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
								Register
							</button>
						</div>
					</form>
					<div className="relative flex items-center justify-center w-full mt-6 border border-t border-gray-300">
						<div className="absolute px-5 bg-white">Or</div>
					</div>
					<div className="flex mt-4 gap-x-2">
						<button
							type="button"
							className="flex items-center justify-center w-full p-2 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700"
						>
							<FcGoogle></FcGoogle>
						</button>
						<button className="flex items-center justify-center w-full p-2 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700">
							<BsGithub></BsGithub>
						</button>
					</div>
					<p className="mt-6 text-sm font-light text-center text-gray-700">
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