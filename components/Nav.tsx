// packages
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

// state
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loggedState } from "../atoms/loggedAtom";
import {
	loadingState,
	routeChangeState,
	stopLoadingState,
} from "../atoms/loadingAtom";

// components
import { Icons } from "../helper/constants";
import NavLink from "./NavLink";
import NavBtn from "./NavBtn";
import { useEffect } from "react";

const Navbar = () => {
	// router
	const router = useRouter();
	
	// states
	const logged = useRecoilValue(loggedState);
	const setLoading = useSetRecoilState(loadingState);
	const setStopLoading = useSetRecoilState(stopLoadingState);
	const setRouteChange = useSetRecoilState(routeChangeState);

	// TODO: refactor this code

	// handling animation by state management and timeout
	const handleAnimate = (route?: string) => {
		// starting the animations
		setRouteChange(true);

		setTimeout(() => {
			// changing route
			router.push("/");

			// setting default state values
			setLoading(true);
			setStopLoading(false);
			setRouteChange(false);
		}, 1000);
	};

	return (
		<nav className="flex w-full justify-between items-center font-sans container">
			<div>
				{/* Logo */}
				<Icon
					icon={Icons.Logo}
					className="w-[110px] lg:w-32 h-auto hover:opacity-80 cursor-pointer transition-opacity duration-200 ease-in-out"
					onClick={() => handleAnimate()}

					// TODO: refactor the code
				/>
			</div>
			<div>
				{/* Checking logged state */}
				{!logged ? (
					// If not logged in show sign in and sign up
					<div className="flex items-center">
						{/* Login */}
						<NavLink
							route="auth/login"
							title="login"
							className={`pt-3 ${
								router.pathname === "/auth/login" && "hidden"
							}`}
							shouldAnimate={true}
						/>
						{/* Sign up */}
						<NavBtn
							route="auth/signup"
							title="sign up"
							className={`hidden sm:block lg:ml-16 md:ml-10 ml-6 ${
								router.pathname === "/auth/signup" && "hidden"
							}`}
							clr="bg-red-500 hover:bg-red-600"
							shouldAnimate={true}
						/>
					</div>
				) : (
					// if logged in show home and fav
					<div className="flex">
						{/* Home */}
						<NavLink route="home" title="home" />
						{/* Favorites */}
						<NavLink
							route="favorites"
							title="favorites"
							className="ml-6 lg:ml-16 md:ml-10 "
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
