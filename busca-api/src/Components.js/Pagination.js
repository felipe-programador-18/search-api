import React from "react"
// create my pagination !!!
const Pagination = (props) => {
    const {page, totalPages, OnLeftClick, OnRightClick } = props;
    return ( 
         <div className="pagination-container">
          <button onClick={OnLeftClick}><div>⬅</div></button>
            <div> {page} : {totalPages} </div>
          <button onClick={OnRightClick}><div>➡</div> </button>
          
          </div>
    )
}


export default Pagination