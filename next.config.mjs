import withPWA from "next-pwa";

const nextConfig = withPWA({
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
});

export default nextConfig;
