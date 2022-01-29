import React from "react";

import { Icon } from "@iconify/react";
import { Icons } from "../helper/constants";

interface Props {
	label: string;
	type: string;
	icon: Icons;
	value: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;

	placeholder?: string;
	autocomplete?: string;

	// error handling
	isCorrect: boolean | null;
	msgError: string;
	msgCorrect: string;
}

const Input = ({
	type,
	label,
	icon,
	placeholder,
	isCorrect,
	msgError,
	msgCorrect,
	autocomplete,
	value,
	onChange,
}: Props) => {
	return (
		<div className="mb-2 w-full">
			<label
				className={`font-light opacity-80 text-[10px] ${
					isCorrect === null
						? "text-white"
						: isCorrect
						? "text-green-500"
						: "text-red-500"
				}`}
			>
				{label}
			</label>

			<div
				className={`flex items-center space-x-1 border-b ${
					isCorrect === null
						? "border-white"
						: isCorrect
						? "border-green-500"
						: "border-red-500"
				} pb-1 duration-200 transition-all ease-in-out`}
			>
				<Icon
					icon={icon}
					className={`w-5 h-5 opacity-100 ${
						isCorrect === null
							? "text-white"
							: isCorrect
							? "text-green-500"
							: "text-red-500"
					}`}
				/>
				<input
					type={type}
					className="w-full bg-transparent font-light text-sm outline-none"
					placeholder={placeholder}
					autoComplete={autocomplete ? autocomplete : "off"}
					required
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>

			{/* <hr className="w-full opacity-60 group-focus:opacity-100 group-active:opacity-100 group-focus-within:opacity-100" /> */}

			{isCorrect === null ? (
				""
			) : isCorrect ? (
				<div className="text-green-500 font-light flex items-center mt-1">
					<Icon icon={Icons.Tick} className="mr-1" />{" "}
					<span className="text-xs">{msgCorrect}</span>
				</div>
			) : (
				<div className="text-red-500 font-light flex items-center mt-1">
					<Icon icon={Icons.Warning} className="mr-1" />{" "}
					<span className="text-xs">{msgError}</span>
				</div>
			)}
		</div>
	);
};

export default Input;
