// next js
import { useEffect } from "react";

// custom components
import Header from "../components/Header";
import Loading from "../components/Loading";
import Navbar from "../components/Nav";
import Masonry from "react-masonry-css";

// state
import { loadingState } from "../atoms/loadingAtom";
import { dataState } from "../atoms/dataAtom";
import { useRecoilState } from "recoil";
import { Pin } from "../types";

// others
import { v4 as uuidv4 } from "uuid";
import { Icon } from "@iconify/react";

// temp
import data from "../feed.json";
import Item from "../components/Item";
import Image from "next/image";

//* masonry breakpoints
const breakpointColumns = {
	default: 4,
	800: 3,
	600: 2,
	400: 1,
};

function Home() {
	const [loading, setLoading] = useRecoilState(loadingState);

	// TODO: make the heart click option

	// TODO: turn the data into a state and give Pin page
	//todo the ability to go through the data and find the pin using the params
	// FIXME: make data fetch
	// FIXME: intor animation sucks
	const [pins, setPins] = useRecoilState(dataState);

	useEffect(() => {
		setPins(data);
	}, []);

	return (
		<div className="flex flex-col bg-black text-white h-screen overflow-y-auto">
			<Header title={loading ? "Loading..." : "Home"} />

			{/* Navbar */}
			<header className="w-full px-10 sm:px-0">
				<Navbar />
			</header>

			<Masonry
				breakpointCols={breakpointColumns}
				className="w-full flex container"
			>
				{data?.map(
					(pin: Pin) =>
						pin.media_type === "image" && <Item key={uuidv4()} data={pin} />
				)}
			</Masonry>
		</div>
	);
}

export default Home;
