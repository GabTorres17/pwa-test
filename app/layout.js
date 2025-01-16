"use client";

import InstallPrompt from "./components/InstallPrompt";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
				<InstallPrompt />
				<ServiceWorkerRegister />
			</body>
		</html>
	);
}
