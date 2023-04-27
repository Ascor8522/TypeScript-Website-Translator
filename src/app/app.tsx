import "./app.scss";

import Header from "../components/header/header";
import Dashboard from "../pages/dashboard/dashboard";
import Editor from "../pages/editor/editor";
import FolderPicker from "../pages/folder-picker/folder-picker";
import GlossaryEditor from "../pages/glossary-editor/glossary-editor";

export function App() {
	return (
		<>
			<Header disabled={true} />
			{/* The newt booleans are only for test purposes */}
			{/* You can easily enable/disable a page and view it while the app is in construction */}
			{true && <FolderPicker />}
			{false && <Dashboard />}
			{false && <Editor />}
			{false && <GlossaryEditor />}
		</>
	);
}
