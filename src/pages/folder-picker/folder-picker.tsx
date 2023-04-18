import { useState } from "preact/hooks";

export default function FolderPicker({ }: FolderPickerProps) {
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

	return (
		<></>
	);
}

interface FolderPickerProps {

}
