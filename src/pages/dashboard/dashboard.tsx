import { useState } from "preact/hooks";
import FolderSelector from "../../components/folder-selector/folderselector";

export default function Dashboard({ }: DashboardProps) {

	const [isFileUploaded, setIsFileUploaded] = useState(false);

	const onFileUploaded = () => {
		setIsFileUploaded(true);
	};
	
	return (
		<>
		{!isFileUploaded && <FolderSelector onFileUploaded={onFileUploaded} />}
		</>
	);
}

interface DashboardProps {
}
