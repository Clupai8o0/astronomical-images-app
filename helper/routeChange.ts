import { NextRouter } from "next/router";

// atoms
import { useRecoilState } from "recoil";
import {
	routeChangeState,
	loadingState,
	stopLoadingState,
} from "../atoms/loadingAtom";

/**
 * Handles animations during route change for micro-interactions
 * @param {string} route - the route to change to. eg: '/auth/login' (NOTE: Include a '/' before the path)
 */
export const handleRouteChange = (route: string) => {
	if (route[0] !== "/") return;

	// states
	const [routeChange, setRouteChange] = useRecoilState(routeChangeState);
	const [loading, setLoading] = useRecoilState(loadingState);
	const [stopLoading, setStopLoading] = useRecoilState(stopLoadingState);

	//* setting the route change state to true so items disappear
	//* in 1s
	setRouteChange(true);

	//* changing states
	const timeout = setTimeout(() => {
		// setting the states to default
		setRouteChange(false);
		setLoading(true);
		setStopLoading(false);
	}, 1000);

	return;
	clearTimeout(timeout); // just making sure it works first
};
