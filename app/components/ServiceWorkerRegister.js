"use client";

import { useEffect } from "react";

const ServiceWorkerRegister = () => {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/sw.js")
				.then((registration) => {
					console.log("Service Worker registered:", registration);
				})
				.catch((error) => {
					console.error("Service Worker registration failed:", error);
				});
		}
	}, []);

	return null; // Este componente no renderiza nada visible
};

export default ServiceWorkerRegister;
