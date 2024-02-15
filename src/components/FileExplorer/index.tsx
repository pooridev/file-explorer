import FileNode from "./FileNode";

import styles from "./style.module.css";

type FileSystem = {
  name: string;
  id: number;
  children?: FileSystem;
}[];

interface Props {
  fileSystem: FileSystem;
}

const FileExplorer = ({ fileSystem }: Props) => {
  return (
    <div className={styles.fileExplorer}>
      {fileSystem.map((file) => (
        <FileNode key={file.id} fileNode={file} />
      ))}
    </div>
  );
};

export default FileExplorer;
