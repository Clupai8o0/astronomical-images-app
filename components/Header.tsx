import Head from "next/head";

interface Props {
	title: string
}

const Header = ({ title }: Props) => {
  return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/icon.png" />
			<link
				href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
				rel="stylesheet"
			/>
		</Head>
	);
}

export default Header
