"use client";

import Link from "next/link";

export default function AboutLayout({ children }) {
	return (
		<section>
			<Link href={"/"}>Home</Link>
			{children}
		</section>
	);
}
