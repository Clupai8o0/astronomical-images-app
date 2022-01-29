// react components
import React from "react";
import { useRouter } from "next/router";

// helper scripts
import { capitalize } from "../helper/script";

// atoms
import { useSetRecoilState } from "recoil";
import {
	loadingState,
	routeChangeState,
	stopLoadingState,
} from "../atoms/loadingAtom";

interface Props {
	route: string;
	title: string;
	className?: string;
	target?: string;
	shouldAnimate?: boolean;
}

const NavLink = ({ route, title, className, target, shouldAnimate }: Props) => {
	// router
	const router = useRouter();

	// states
	const setLoading = useSetRecoilState(loadingState);
	const setStopLoading = useSetRecoilState(stopLoadingState);
	const setRouteChange = useSetRecoilState(routeChangeState);

	// handling animation by state management and timeout
	const handleAnimate = () => {
		// starting the animations
		setRouteChange(true);

		setTimeout(() => {
			// changing route
			router.push("/" + route);

			// setting default state values
			setLoading(true);
			setStopLoading(false);
			setRouteChange(false);
		}, 1000);
	};

	return (
		<div className={`flex flex-col items-center group ${className}`}>
			<a
				className="nav-link"
				title={capitalize(title)}
				onClick={() =>
					shouldAnimate ? handleAnimate() : router.push("/" + route)
				}
				target={target}
			>
				{capitalize(title)}
			</a>
			<hr className="nav-hr" />
		</div>
	);
};

export default NavLink;
