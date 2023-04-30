import "./app.scss";

import Router from 'preact-router';
import { Link } from 'preact-router/match';

import Header from "../components/header/header";
import Dashboard from "../pages/dashboard/dashboard";
import Editor from "../pages/editor/editor";
import FolderPicker from "../pages/folder-picker/folder-picker";
import GlossaryEditor from "../pages/glossary-editor/glossary-editor";

export function App() {
	return (
		<>
			<Header disabled={false} />
			<main>
				<Router>
					<FolderPicker path="" default />
					<Dashboard path="/dashboard" />
					<Editor path="/editor" />
					<GlossaryEditor path="/glossary" />
				</Router>
			</main>
			<div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
				<span>This is a dev-only menu</span>
				<Link style={{ color: "white" }} href="/">File Picker</Link>
				<Link style={{ color: "white" }} href="/dashboard">Dashboard</Link>
				<Link style={{ color: "white" }} href="/editor">Editor</Link>
				<Link style={{ color: "white" }} href="/glossary">Glossary</Link>
			</div>
		</>
	);
}
