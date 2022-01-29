import { Icons } from "../helper/constants";
import FooterContactLink from "./FooterContactLink";
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<footer className="bg-black w-full text-white flex flex-col items-center py-14 z-10 font-sans mt-24">
			<div className="text-center mb-8">
				<p className="opacity-80 text-lg">Project By Clupai8o0/Shiki</p>

				{/* other links */}
				<p className="opacity-80 font-light mt-4">
					Powered by{" "}
					<FooterLink href="https://api.nasa.gov/" title="NASA Api" />,{" "}
					<FooterLink href="https://firebase.google.com/" title="firebase" />{" "}
					and <FooterLink href="https://nextjs.org/" title="next js" />
				</p>
				<p className="opacity-80 font-light">
					Inspired By{" "}
					<FooterLink
						href="https://www.udemy.com/user/jacinto-wong/"
						title="Jacinto Wong"
					/>
				</p>
			</div>

			{/* Contact links */}
			<div className="flex space-x-7 mb-3">
				<FooterContactLink
					title="github"
					url="https://github.com/Clupai8o0"
					icon={Icons.Github}
				/>
				<FooterContactLink
					title="discord"
					url="https://discord.gg/bkvHSBGu4F"
					icon={Icons.Discord}
					hoverClr="group-hover:text-blue-500"
				/>
				<FooterContactLink
					title="twitter"
					url="https://www.twitter.com/Clupai8o0"
					icon={Icons.Twitter}
					hoverClr="group-hover:text-blue-300"
				/>
				<FooterContactLink
					title="instagram"
					url="https://www.instagram.com/shiki8o0/"
					icon={Icons.Instagram}
					hoverClr="group-hover:text-red-400"
				/>
			</div>
		</footer>
	);
};

export default Footer;
