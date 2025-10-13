import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

const File = ({ data }) => {
  return (
    <>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </>
  );
};

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (node.isFolder) setIsExpanded((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="node" onClick={handleToggle}>
        <span className="icons">
          {node.isFolder ? (
            isExpanded ? (
              <FaFolderOpen className="folder-icon" />
            ) : (
              <FaFolder className="folder-icon" />
            )
          ) : (
            <FaFile className="file-icon" />
          )}
        </span>
        <h5 className="node_name">{node.name}</h5>
      </div>

      {isExpanded && node.children && (
        <div className="children">
          <File data={node.children} />
        </div>
      )}
    </div>
  );
};

export default File;
