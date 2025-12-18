import React, { useState } from "react";
import { PER_PAGE_ITEM } from "../constant";

const Pagination = ({currentPage,noOfPages,handleChange,handleNext,handlePrevious}) => {
  return (
    <div className="page-number-container">
        <button className="page-number" disabled={currentPage===0} onClick={()=>handlePrevious()}>⬅️</button>
      {[...Array(noOfPages).keys()].map((n, i) => (
        <button key={i}
        className={"page-number " + (n===currentPage ? " active":"")}
        onClick={()=>handleChange(n)}
        >{n}</button>
      ))}
      
        <button disabled={currentPage===noOfPages-1} className="page-number" onClick={()=>handleNext()}>➡️</button>
    </div>
  );
};

export default Pagination;
