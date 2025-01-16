"use client";

export default function AboutLayout({ children }) {
	return (
		<section style={{ padding: "2rem", backgroundColor: "#e0f7fa" }}>
			<h1>Acerca de Nosotros</h1>
			{children}
		</section>
	);
}
