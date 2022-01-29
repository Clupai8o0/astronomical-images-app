import React from "react";
import { capitalize } from "../helper/script";

interface Props {
	href: string;
	title: string;
}

const FooterLink = ({ href, title }: Props) => {
	return (
		<a
			href={href}
			target="_blank"
			className="hover:underline cursor-pointer"
			title={capitalize(title)}
		>
			{capitalize(title)}
		</a>
	);
};

export default FooterLink;
