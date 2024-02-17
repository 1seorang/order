import { title } from "@/components/primitives";

import App from "./App";
export default function DocsPage() {
	return (
		<div className="w-full mx-1 md:mx-3">
			<h1 className={title()}>Note-X</h1>
			<main className="w-full mx-2">

				<App />
			</main>
		</div>
	);
}
