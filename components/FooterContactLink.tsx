import React from "react";
import { Icon } from "@iconify/react";
import { Icons } from "../helper/constants";
import { capitalize } from "../helper/script";

interface Props {
	title: string;
	url: string;
	icon: Icons;
	hoverClr?: string;
}

const FooterContactLink = ({ title, url, icon, hoverClr }: Props) => {
	return (
		<div className="group">
			<a title={capitalize(title)} href={url} target="_blank">
				<Icon
					icon={icon}
					className={`w-[40px] h-auto text-white group-hover:scale-110 transition-all ease-out duration-200 cursor-pointer ${hoverClr}`}
				/>
			</a>
		</div>
	);
};

export default FooterContactLink;
