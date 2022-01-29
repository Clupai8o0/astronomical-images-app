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
	clr: string;
	shouldAnimate?: boolean;
}

/**
 * @param { string } clr - The color of button i.e. (bg-orange-500 hover:bg-orange-600)
 */
const NavBtn = ({ route, title, className, clr, shouldAnimate }: Props) => {
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
		<div>
			<a
				className={`btn ${className} ${clr}`}
				onClick={() =>
					!shouldAnimate
						? router.push("/" + route)
						: router.pathname !== "/" + route
						? handleAnimate()
						: null
				}
				title={capitalize(title)}
			>
				{capitalize(title)}
			</a>
		</div>
	);
};

export default NavBtn;
