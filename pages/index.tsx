// next components
import Image from "next/image";

// custom components
import Header from "../components/Header";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import NavBtn from "../components/NavBtn";
import Loading from "../components/Loading";

// states
import { loadingState, routeChangeState, stopLoadingState } from "../atoms/loadingAtom";
import { useRecoilState } from "recoil";

// animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// jwt
import jwt from "jsonwebtoken";

export default function Home() {
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

	return (
		<div className="w-screen flex flex-col bg-black text-white overflow-x-hidden h-screen font-sans">
			{/* Header - Shows loading if state is loading otherwise page title */}
			<Header title={loading ? "Loading..." : "Astronomical Images"} />

			{/* showing loading modal */}
			<div
				className={`w-full h-full absolute grid place-items-center z-50 bg-black ${
					loading ? "block" : "hidden"
				}`}
			>
				<Loading stop={stopLoading} />
			</div>

			{/* Main page */}
			<div>
				{/* Navbar */}
				<header
					className={`flex-grow px-10 sm:px-0 ${routeChange && "fade-back-up"}`}
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<Navbar />
				</header>

				<main className="flex-grow lg:flex lg:flex-row-reverse container lg:h-[600px] lg:my-20 my-10">
					{/* Hero image */}
					<div className="w-full lg:w-1/2 h-96 lg:h-auto flex justify-center relative lg:mb-28 lg:mt-0 sm:mt-20">
						<Image
							src="/hero-img.jpg"
							layout="fill"
							objectFit="contain"
							className={`mt-20 ${routeChange && "fade-out"}`}
							data-aos="fade-in"
							data-aos-delay="1500"
							data-aos-duration="2000"
							onLoad={handleLoad}
						/>
					</div>

					{/* Content */}
					<div
						className={`text-center flex flex-col items-center mt-20 lg:w-1/2 lg:text-left lg:items-start lg:m-0 lg:pt-20 ${
							routeChange && "fade-back-up"
						}`}
					>
						<h1
							className={`text-5xl md:text-6xl lg:text-7xl font-extrabold ${
								routeChange && "fade-back-up"
							}`}
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="1000"
						>
							Astrological Images
						</h1>
						<p
							className={`text-lg lg:text-left opacity-80 max-w-md mt-4 md:max-w-lg lg:max-w-full ${
								routeChange && "fade-back-up"
							}`}
							data-aos="fade-up"
							data-aos-delay="750"
							data-aos-duration="1000"
						>
							A portfolio project that uses the NASA Api to get images of the
							day and renders them as component pins which you can save as
							favorites and view later...
						</p>

						<div
							data-aos="fade-up"
							data-aos-delay="1000"
							data-aos-duration="1000"
							className={`mt-14 group ${routeChange && "fade-back-up"}`}
						>
							<NavBtn
								route="home"
								title="check out"
								clr="bg-orange-500 hover:bg-orange-600"
								shouldAnimate={true}
							/>
						</div>
					</div>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}
