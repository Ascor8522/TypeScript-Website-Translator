import { useState } from "preact/hooks";
import FolderSelector from "../../components/folder-selector/folderselector";

export default function Dashboard({}: DashboardProps) {
	const [isFileUploaded, setIsFileUploaded] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
	const onFileUploaded = (files: File[]) => {
	  setIsFileUploaded(true);
	  setUploadedFiles(files);
	};
  
	return (
	  <>
		{!isFileUploaded && <FolderSelector onFileUploaded={onFileUploaded} />}
		{isFileUploaded && (
		  <div>
			<h2>Uploaded Files</h2>
			<ul>
			  {uploadedFiles.map((file) => (
				<li key={file.name}>{file.name}</li>
			  ))}
			</ul>
		  </div>
		)}
	  </>
	);
  }
  
  interface DashboardProps {}
  
