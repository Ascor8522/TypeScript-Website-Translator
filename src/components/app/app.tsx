import "./app.scss";

import { useState } from "preact/hooks";

import Header from "../header/header";
import ResizablePanes from "../resizable-panes/resizable-panes";
import Tab from "../tabs/tab";
import Tabs from "../tabs/tabs";
import TranslationProgress from "../translation-progress/translation-progress";

export function App() {
	const [fileSystemDirectoryEntry, setFileSystemDirectoryEntry] = useState<FileSystemDirectoryEntry | null>(null);

	const onFileSystemAccessGranted = (fileSystem: FileSystem) => {
		/// setFileSystemDirectoryEntry(fileSystem);
		console.log("File System Access Granted");
	};
	const onFileSystemAccessDenied = (error: Error) => {
		console.log("File System Access Denied");
	};
	const requestFileSystemAccess = () => window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, onFileSystemAccessGranted, onFileSystemAccessDenied);
	/*
		if(!fileSystemDirectoryEntry) return (
			<>
				<input onChange={requestFileSystemAccess} type="file">Request File System Access</input>
			</>
		);
	*/
	return (
		<>
			<Header />
			<TranslationProgress reviewed={0.2} translated={0.8} />
			<ResizablePanes direction="row">
				<Tabs defaultTab="all">
					<Tab name="all" title="16" subtitle="All">
						<div>All translations here</div>
					</Tab>
					<Tab name="untranslated" title="0" subtitle="Untranslated">
						<div>All untranslated strings here</div>
					</Tab>
					<Tab name="unreviewed" title="10" subtitle="Unreviewed">
						<div>All unreviewed strings here</div>
					</Tab>
				</Tabs>
				<div>Other pane</div>
				<Tabs defaultTab="suggestions">
					<Tab name="suggestions" label="Suggestions">
						<div>Suggestions here</div>
					</Tab>
					<Tab name="history" label="History">
						<div>History here</div>
					</Tab>
					<Tab name="glossary" label="Glossary">
						<div>Glossary here</div>
					</Tab>
					<Tab name="comments" label="Comments" badge="3">
						<div>Comments here</div>
					</Tab>
				</Tabs>
			</ResizablePanes>
		</>
	);
}
