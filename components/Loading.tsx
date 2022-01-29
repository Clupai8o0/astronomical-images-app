import Image from "next/image";

interface Props {
	stop?: boolean
}

const Loading = ({ stop }: Props) => {
	return (
		<div
			className={!stop ? "animate-fade-in" : "animate-fade-out"}
		>
			<Image
				src="/loading-3.png"
				width="100"
				height="100"
				className="animate-reverse-spin delay-1000"
			/>
		</div>
	);
};

export default Loading;
