import React, { useState } from "react";

const File = ({ data, addNoteToList }) => {
  const [isExpandable, setIsExpandable] = useState({});
  //   console.log(addNoteToList);
  return (
    <>
      {data.map((node) => (
        <div className="container" key={node.id}>
          {node.isFolder && (
            <span
              className="icons"
              onClick={() =>
                setIsExpandable((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpandable?.[node.name] ? "-" : "+"}
            </span>
          )}

          <h5 className="node_name">{node.name}</h5>
          {node?.isFolder && (
            <span onClick={() => addNoteToList(node.id)}>
              <img className="foldericon" src="new-folder.png" alt="" />
            </span>
          )}
          {isExpandable?.[node.name] && node?.children && (
            <File
              key={node.id}
              data={node.children}
              addNoteToList={addNoteToList}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default File;

// "-" : "+"
