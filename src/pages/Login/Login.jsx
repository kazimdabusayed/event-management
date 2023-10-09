import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [showPass, setShowPass] = useState(false);

    const handleLogIn = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

		
        signIn(email, password)
            .then((result) => {
				console.log(result.user);
				// navigate after login
				navigate(location?.state ? location.state : "/");
			})
            .catch((error) => {
                console.error(error);
            });
    }
		
	const handleGoogleSignin = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate(location?.state ? location.state : "/");
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleGithubSignin = async (e) => {
		e.preventDefault();
		try {
			await githubSignIn();
			navigate(location?.state ? location.state : "/");
		} catch (err) {
			console.log(err.message);
		}
	};

    return (
		<>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
				<div className="w-full px-6 py-2 m-auto bg-white rounded-md lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center text-purple-600 ">
						Login to your account
					</h1>
					<form onSubmit={handleLogIn} className="mt-6">
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
						<a
							href="#"
							className="text-sm text-purple-600 hover:underline"
						>
							Forget Password?
						</a>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
								Login
							</button>
						</div>
					</form>
					<div className="relative flex items-center justify-center w-full mt-6 border border-t border-gray-300">
						<div className="absolute px-5 bg-white">Or</div>
					</div>
					<div className="flex mt-4 gap-x-2">
						<button
							type="button"
							onClick={handleGoogleSignin}
							className="flex items-center justify-center w-full p-3 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700"
						>
							<FcGoogle></FcGoogle>
							<p className="ml-3">Google</p>
						</button>

						<button
							type="button"
							onClick={handleGithubSignin}
							className="flex items-center justify-center w-full p-3 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700"
						>
							<BsGithub></BsGithub>
							<p className="ml-3">GitHub</p>
						</button>
					</div>
					<p className="mt-6 text-base text-center text-gray-800">
						{" "}
						Don&apos;t have an account?{" "}
						<Link
							to="/register"
							className="font-medium text-purple-600 hover:underline"
						>
							Register
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;