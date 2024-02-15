import { useState } from "react";

import styles from "./style.module.css";
import AnimateHeight from "../../AnimateHeight";
import ChevronRight from "../../icons/ChevronRight";

import { motion } from "framer-motion";
import classNames from "classnames";

type Height = number | "auto";

interface Props {
  fileNode: {
    name: string;
    id: number;
    children?: Array<Props["fileNode"]>;
  };
}

const FileNode = ({ fileNode }: Props) => {
  const [height, setHeight] = useState<Height>(0);

  const isFolderOpen = height == "auto";

  const isFolder = Boolean(fileNode.children?.length);
  const isFile = !isFolder;

  const handleToggle = () => {
    if (isFolder) setHeight(height === 0 ? "auto" : 0);
  };

  return (
    <div className={styles.nodeWrapper}>
      <button
        aria-expanded={isFolderOpen}
        className={classNames(styles.toggle, { [styles.file]: isFile })}
        onClick={handleToggle}
      >
        {isFolder && (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: isFolderOpen ? 90 : 0 }}
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 0.4,
            }}
            fill="currentColor"
            width={22}
            height={22}
          >
            <ChevronRight />
          </motion.svg>
        )}

        <span>{fileNode.name}</span>
      </button>

      {isFolder && (
        <AnimateHeight height={height} className={styles.folder}>
          {fileNode.children?.map((_fileNode) => (
            <FileNode key={_fileNode.id} fileNode={_fileNode} />
          ))}
        </AnimateHeight>
      )}
    </div>
  );
};

export default FileNode;
