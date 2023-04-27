import classnames from "classnames";
import { useRef, useState } from "preact/hooks";

import styles from "./folder-selector.module.scss";
import uploadFileIcon from "./upload-file-icon.svg";

interface FileUploadProps {
	onFileUploaded: (files: File[]) => void;
}

function FolderSelector({ onFileUploaded }: FileUploadProps) {
	const fileDragAreaRef = useRef<HTMLLabelElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [isDragging, setIsDragging] = useState(false);

	const preventDefault = (event: Event) => {
		event.preventDefault();
		event.stopPropagation();
	};

	const onDragEnter = (event: MouseEvent) => {
		// setIsDragging(true);
		fileDragAreaRef.current?.classList.add(styles.dragFileAreaHover);
	};
	const onDragLeave = (event: MouseEvent) => {
		// setIsDragging(false);
		fileDragAreaRef.current?.classList.remove(styles.dragFileAreaHover);
	};

	const onDrop = (event: DragEvent) => { };

	/*
	const onDrop = async (event: DragEvent) => {
		event.preventDefault();
		if(!event.dataTransfer?.items) return;
		const files = await processFolder(event.dataTransfer.items);
		console.log("Files to upload:");
		files.forEach(file => console.log(`File: ${file.name}`));
		onFileUploaded(files);
	};

	const processFolder = async (
		items: FileList | DataTransferItemList
	): Promise<File[]> => {

		async function processEntry(entry: any) {
			if(entry.isFile) {
				if(entry.name.endsWith(".md")) {
					const file = await entryToFilePromise(entry);
					mdFiles.push(file);
				}
			} else if(entry.isDirectory) {
				const dirReader = entry.createReader();
				const entries = await readEntriesPromise(dirReader);
				for(const childEntry of entries) {
					await processEntry(childEntry);
				}
			}
		}

		const mdFiles: File[] = [];

		return ("add" in items ? [] : items)
			.map(item => {
				if(item.webkitGetAsEntry) {
					const entry = item.webkitGetAsEntry();
					await processEntry(entry);
				} else if(item instanceof File && item.name.endsWith(".md")) {
					mdFiles.push(item);
				});
	};

	const readEntriesPromise = (dirReader: any): Promise<any[]> => {
		return new Promise((resolve, reject) => dirReader.readEntries(resolve, reject));
	};

	const entryToFilePromise = (entry: any): Promise<File> => {
		return new Promise((resolve, reject) => entry.file(resolve, reject));
	};

	const onBrowseFilesClick = () => {
		if(fileInputRef.current) fileInputRef.current.click();
	};

	const onFileInputChange = async (event: Event) => {
		const target = event.target as HTMLInputElement;
		if(target.files) {
			const files = await processFolder(target.files);
			console.log("Files to upload:");
			files.forEach((file) => {
				console.log(`File: ${file.name}`);
			});
			onFileUploaded(files); // Pass the files to the callback
		}
	};
	*/

	return (
		<div class={styles.formContainer}>
			<label
				class={classnames(styles.dragFileArea, { [styles.dragFileAreaHover]: isDragging })}
				ref={fileDragAreaRef}
				onDrag={e => { preventDefault(e); }}
				onDragStart={e => { preventDefault(e); }}
				onDragOver={e => { preventDefault(e); onDragEnter(e); }}
				onDragEnter={e => { preventDefault(e); onDragEnter(e); }}
				onDragLeave={e => { preventDefault(e); onDragLeave(e); }}
				onDragEnd={e => { preventDefault(e); onDragLeave(e); }}
				onDrop={e => { preventDefault(e); onDragLeave(e); onDrop(e); }}>
				<img
					class={styles.uploadFileIcon}
					src={uploadFileIcon}
					alt="Upload Folder"
				/>
				<p class={styles.instructions}>Drag & Drop your folder here</p>
				or
				<p class={styles.alternativeInstructions}>
					{" "}
					<u class={styles.browseFilesText}>
						click here
					</u>
					{" "}
					to browser for a folder
				</p>
				<input
					class={styles.fileInput}
					type="file"
					// @ts-ignore
					webkitdirectory
					ref={fileInputRef}
					hidden
					onChange={() => { }}
				/>
			</label>
		</div >
	);
}

export default FolderSelector;
