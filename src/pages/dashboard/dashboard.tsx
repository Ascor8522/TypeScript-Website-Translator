import { useState } from 'preact/hooks';
import FolderSelector from '../../components/folder-selector/folderselector';
import MenuBar from '../../components/dashboard/menubar/menubar';
import styles from './dashboard.module.scss';

export default function Dashboard({}: DashboardProps) {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onFileUploaded = (files: File[]) => {
    setIsFileUploaded(true);
    setUploadedFiles(files);
  };

  return (
    <>
      <MenuBar />
      <div className={styles["main-container"]}>
        <div className={styles["left-pane"]}>
        {}
        </div>
        <div className={styles["right-pane"]}>
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
        </div>
      </div>
    </>
  );
}

interface DashboardProps {}
