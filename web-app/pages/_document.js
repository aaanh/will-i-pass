import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="theme-compiled">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body className={`antialiased text-slate-500 text-lg bg-white leading-base`}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
