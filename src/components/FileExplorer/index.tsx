import FileNode from "./FileNode";

import styles from "./style.module.css";

export type FileNodeType = {
  name: string;
  id: number;
  children?: FileNodeType[];
};

interface Props {
  fileSystem: FileNodeType[];
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
