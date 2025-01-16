"use client";

import { useEffect, useState } from "react";

const InstallPrompt = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleBeforeInstallPrompt = (event) => {
			event.preventDefault();
			setDeferredPrompt(event);
			setIsVisible(true);
		};

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt
			);
		};
	}, []);

	const handleInstallClick = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "accepted") {
					console.log("User accepted the install prompt.");
				} else {
					console.log("User dismissed the install prompt.");
				}
				setDeferredPrompt(null);
				setIsVisible(false);
			});
		}
	};

	if (!isVisible) {
		return null;
	}

	return (
		<button
			onClick={handleInstallClick}
			style={{ position: "fixed", bottom: 20, right: 20 }}
		>
			Install App
		</button>
	);
};

export default InstallPrompt;
