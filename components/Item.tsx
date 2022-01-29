import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";

// state
import { currentPinState } from "../atoms/currentPinAtom";
import { useRecoilState } from "recoil";
import { Pin } from "../types";

interface Props {
	data: Pin;
}

// TODO: make the home and favorites change based upon where the router is

const Item = ({ data }: Props) => {
	const [currentPin, setCurrentPin] = useRecoilState(currentPinState);
	const [isFav, setIsFav] = useState();
	const router = useRouter();

	const openPin = () => {
		setCurrentPin(data);
		router.push(`/pin/${data.url.slice(33, data.url.length - 4)}`);
	};

	return (
		<div
			className="mx-4 my-10 rounded-lg flex flex-col items-center cursor-pointer transition-transform duration-150 ease-out hover:scale-105"
			onClick={openPin}
			title={data.title}
		>
			<img
				loading="lazy"
				src={data.url}
				className="object-cover w-full rounded-t-lg"
			/>
			<div className="w-full flex items-center mt-4 px-3">
				<p
					className="font-light opacity-100 text-lg truncate flex-grow w-[90%]"
					style={{ fontFamily: "Poppins" }}
				>
					{data.title}
				</p>
				<div className="w-[10%] ml-3">
					<Icon
						icon="ci:heart-outline"
						className="w-full h-auto cursor-pointer hover:opacity-80 hover:text-yellow-400 transition-all ease-out duration-150"
					/>
				</div>
			</div>
			<hr className="w-[80%] mt-3 border-white" />
		</div>
	);
};

export default Item;
