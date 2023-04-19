import { useState, useRef } from "preact/hooks";
import styles from "./folderselector.module.scss";
import uploadFileIcon from "../../assets/icons/uploadFileIcon.svg";

interface FileUploadProps {
  onFileUploaded: () => void;
}

function FolderSelector({ onFileUploaded }: FileUploadProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = async (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer?.items) {
      const files = await processFolder(event.dataTransfer.items);
      console.log("Files to upload:");
      files.forEach((file) => {
        console.log(`File: ${file.name}`);
      });
      onFileUploaded();
    }
  };

  const processFolder = async (
    items: FileList | DataTransferItemList
  ): Promise<File[]> => {
    const mdFiles: File[] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as any;

      if (item.webkitGetAsEntry) {
        const entry = item.webkitGetAsEntry();
        await processEntry(entry);
      } else if (item instanceof File && item.name.endsWith(".md")) {
        mdFiles.push(item);
      }
    }

    async function processEntry(entry: any) {
      if (entry.isFile) {
        if (entry.name.endsWith(".md")) {
          const file = await entryToFilePromise(entry);
          mdFiles.push(file);
        }
      } else if (entry.isDirectory) {
        const dirReader = entry.createReader();
        const entries = await readEntriesPromise(dirReader);
        for (const childEntry of entries) {
          await processEntry(childEntry);
        }
      }
    }

    return mdFiles;
  };

  const readEntriesPromise = (dirReader: any): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });
  };

  const entryToFilePromise = (entry: any): Promise<File> => {
    return new Promise((resolve, reject) => {
      entry.file(resolve, reject);
    });
  };

  const onBrowseFilesClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileInputChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files = await processFolder(target.files);
      console.log("Files to upload:");
      files.forEach((file) => {
        console.log(`File: ${file.name}`);
      });
      onFileUploaded();
    }
  };
  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles["form-container"]}>
            <div className={styles["upload-files-container"]}>
              <div className={styles["drag-file-area"]}>
                <input
                  className={styles["default-file-input"]}
                  type="file"
                  webkitdirectory="true"
                  ref={fileInputRef}
                  onChange={onFileInputChange}
                />
                <img
                  class={styles.uploadFileIcon}
                  src={uploadFileIcon}
                  alt="Upload Folder"
                />
                <h3>Drag & Drop your folder here</h3>
                <label>
                  or{" "}
                  <span
                    className={styles["browse-files-text"]}
                    onClick={onBrowseFilesClick}
                  >
                    browse
                  </span>{" "}
                  for a folder
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FolderSelector;