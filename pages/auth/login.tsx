// react
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// icons
import { Icon } from "@iconify/react";
import { Icons } from "../../helper/constants";

// components
import Navbar from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";

// authentication
import {} from "firebase/auth";

// states
import { useRecoilState } from "recoil";
import {
	loadingState,
	routeChangeState,
	stopLoadingState,
} from "../../atoms/loadingAtom";

// animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading";

function SignIn() {
	// router
	const router = useRouter();

	//* states
	const [loading, setLoading] = useRecoilState(loadingState);
	const [stopLoading, setStopLoading] = useRecoilState(stopLoadingState);
	const [routeChange, setRouteChange] = useRecoilState(routeChangeState);

	//* handling loading animation
	const handleLoad = () => {
		// a light load out animation
		setStopLoading(true);

		// setting the animations to be ready
		setTimeout(() => {
			setLoading(false);

			AOS.init();
			AOS.refresh();
		}, 500);
	};

	// TODO: making login button invalid unless error is changed
	// TODO: turning google signin into a component

	return (
		<div className="font-sans max-w-screen flex flex-col bg-black text-white overflow-x-hidden scrollbar-none">
			{/* <Header title={loading ? "Loading..." : "NASA Images"} /> */}
			<Header title={loading ? "Loading..." : "Login Page"} />

			{/* showing loading modal */}
			<div
				className={`w-full h-full absolute grid place-items-center z-50 bg-black ${
					loading ? "block" : "hidden"
				}`}
			>
				<Loading stop={stopLoading} />
			</div>

			<header
				className={`px-10 sm:px-0 z-10 ${routeChange && "fade-back-up"}`}
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Navbar />
			</header>

			<main className="container relative h-[400px] sm:h-[700px] grid place-items-center lg:flex lg:flex-row-reverse lg:items-center">
				{/* Hero image */}
				<div className="-z-0 w-full h-full absolute -left-36 -bottom-60 lg:static lg:w-1/2">
					<Image
						src="/login-hero.jpg"
						height={600}
						width={600}
						objectFit="contain"
						className={(routeChange && "fade-out") || ""}
						data-aos="fade-in"
						data-aos-delay="3000"
						data-aos-duration="2000"
						onLoad={handleLoad}
					/>
				</div>

				{/* Sign in card */}
				<div className="lg:w-1/2 grid place-items-center">
					<div
						className={`z-10 border border-white rounded-md bg-black flex flex-col items-center px-8 py-5 w-[350px] ${
							routeChange && "fade-back-up"
						}`}
						data-aos="zoom-in"
						data-aos-delay="500"
						data-aos-duration="1000"
					>
						<h1
							className="font-semibold text-2xl mb-4"
							data-aos="fade-up"
							data-aos-delay="750"
							data-aos-duration="1000"
						>
							Login
						</h1>

						<a
							className="border border-white flex items-center text-sm font-light w-full px-3 py-2 rounded-md cursor-pointer"
							title="Sign in using google"
							data-aos="fade-up"
							data-aos-delay="1000"
							data-aos-duration="1000"
						>
							<Icon icon={Icons.Google} className="h-5 w-5 mr-3" /> Sign in
							using Google
						</a>

						<span
							className="flex items-center justify-center w-full space-x-2 my-3 opacity-60"
							data-aos="fade-in"
							data-aos-delay="1500"
							data-aos-duration="1000"
						>
							<hr className="w-2/5 border-white" /> <p>or</p>{" "}
							<hr className="w-2/5 border-white" />
						</span>

						<form
							className="w-full flex flex-col items-start"
							data-aos="fade-in"
							data-aos-delay="2000"
							data-aos-duration="1000"
						>
							<Input
								label="Enter your email..."
								type="email"
								icon={Icons.Email}
								placeholder="example@email.com"
								isCorrect={null}
								msgError=""
								msgCorrect="Correct details"
								autocomplete="email"
							/>
							<Input
								label="Enter your password..."
								type="password"
								icon={Icons.Password}
								placeholder="A strong password..."
								isCorrect={null}
								msgError="Something wrong"
								msgCorrect=""
							/>

							<div className="flex items-center mb-3 mt-5">
								<button
									type="submit"
									className="bg-orange-500 hover:bg-orange-600 rounded-md px-5 py-[2px] font-sans mr-3 transition-all hover:scale-110 duration-200 ease-out"
								>
									Login
								</button>
								<div className="text-xs font-light">
									<span>Don't have an account? </span>
									<a
										onClick={() => router.push("/auth/signup")}
										title="Sign Up"
										className="hover:underline hover:text-blue-400 cursor-pointer"
									>
										Sign up
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default SignIn;
