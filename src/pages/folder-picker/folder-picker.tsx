import { useState } from "preact/hooks";

import FolderSelector from "../../components/folder-selector/folder-selector";
import styles from "./folder-picker.module.scss";

export default function FolderPicker({ }: FolderPickerProps) {
	const [isFileUploaded, setIsFileUploaded] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

	const onFileUploaded = (files: File[]) => {
		setIsFileUploaded(true);
		setUploadedFiles(files);
	};

	/*
		const [fileSystemDirectoryEntry, setFileSystemDirectoryEntry] = useState<FileSystemDirectoryEntry | null>(null);

		const onFileSystemAccessGranted = (fileSystem: FileSystem) => {
			/// setFileSystemDirectoryEntry(fileSystem);
			console.log("File System Access Granted");
		};
		const onFileSystemAccessDenied = (error: Error) => {
			console.log("File System Access Denied");
		};
		const requestFileSystemAccess = () => window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, onFileSystemAccessGranted, onFileSystemAccessDenied);

		if(!fileSystemDirectoryEntry) return (
			<>
				<input onChange={requestFileSystemAccess} type="file">Request File System Access</input>
			</>
		);
		*/

	if(isFileUploaded) return (
		<div>
			<h2>Uploaded Files</h2>
			<ul>
				{uploadedFiles.map((file) => (
					<li key={file.name}>{file.name}</li>
				))}
			</ul>
		</div>
	);

	return (
		<div class={styles.spacer}>
			<FolderSelector onFileUploaded={onFileUploaded} />
		</div>
	);
}

interface FolderPickerProps {

}
