import { title } from "@/components/primitives";
import { TodosProvider } from './contexts/todos'
import App from "./App";
export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Note-X</h1>
<TodosProvider>
	<App />
</TodosProvider>
		</div>
	);
}
