import React, { useEffect } from "react";
import { useRouter } from "next/router";

// state
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPinState } from "../../atoms/currentPinAtom";
import { dataState } from "../../atoms/dataAtom";

// components
import Header from "../../components/Header";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function PinPage() {
	// the pin for this page
	const [currentPin, setCurrentPin] = useRecoilState(currentPinState);
	const pins = useRecoilValue(dataState); // all the pins in data rn

	const router = useRouter(); // router

	useEffect(() => {
		// if pin state is empty then find add the pin
		// FIXME: if user does it for some object I don't have
		// I'm fuked
		let arr = [""];
		if (router.query.all)
			if (typeof router.query.all !== "string") arr = router.query.all;

		if (!currentPin) {
			pins.filter((pin) => {
				return pin.url.slice(33, pin.url.length - 4) === arr.join("/");
			});
		}
	}, []);

	// TODO: make the main div class a component class
	// TODO: turning poppins style into component class
	// TODO: a X button to go back and note clear the state
	// TODO: default to home on refresh
	//? px-10 lg:px-52
	return (
		<div className="flex flex-col bg-black text-white h-screen overflow-y-auto">
			<Header title={currentPin.title} />

			{/* Navbar */}
			<header className="w-full px-10 sm:px-0">
				<Navbar />
			</header>

			<main className="max-w-3xl mx-auto">
				<img
					src={currentPin.url}
					alt="pin-image"
					className="w-full rounded-lg"
					loading="lazy"
				/>
				<div className="container flex flex-col justify-center items-center mt-8 mb-3">
					<h1
						className="font-bold text-2xl text-center"
						style={{ fontFamily: "Poppins" }}
					>
						{currentPin.title}
					</h1>
					<h3
						className="font-normal text-center opacity-80"
						style={{ fontFamily: "Poppins" }}
					>
						{currentPin.copyright}
					</h3>
					<button
						className="mt-5 mb-3 bg-red-600 px-5 py-2 rounded-full text-lg hover:scale-110 transition-transform duration-150 ease-out font-medium"
						style={{ fontFamily: "Poppins" }}
						title="Save pin"
					>
						Save
					</button>
				</div>

				<p
					style={{ fontFamily: "Poppins" }}
					className="font-normal opacity-90 px-5 lg:px-0"
				>
					{currentPin.explanation}
				</p>
				<p
					style={{ fontFamily: "Poppins" }}
					className="font-light italic opacity-80 mt-3 ml-5 lg:ml-0"
				>
					{currentPin.date}
				</p>
			</main>
			<Footer />
		</div>
	);
}

export default PinPage;
