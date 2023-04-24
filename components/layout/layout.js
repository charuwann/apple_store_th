import Head from "next/head";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Official Apple Store Thailand</title>
				<link rel="icon" href="https://www.apple.com/favicon.ico" />
			</Head>
			<Navbar />
			{children}
			{/* <Footer /> */}
		</div>
	);
}

export default Layout;
