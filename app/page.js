"use client";

import Link from "next/link";

export default function HomePage() {
	return (
		<main style={{ padding: "2rem" }}>
			<Link href={"/about"}>Acerca de nosotros</Link>

			<h1>Bienvenido a nuestra PWA</h1>
			<p>
				Esta es la página principal. Explora la funcionalidad de nuestra
				aplicación incluso cuando estés offline.
			</p>
		</main>
	);
}
