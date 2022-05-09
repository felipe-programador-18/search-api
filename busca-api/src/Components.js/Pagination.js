import React from "react"
// create my pagination !!!
const Pagination = (props) => {
    const {page, totalPages, onLeftClick, OnRightClick } = props;
    return ( 
         <div className="pagination-container">
          <button onClick={onLeftClick}><div>⬅</div></button>
            <div> {page} de: {totalPages} </div>
          <button onClick={OnRightClick}><div>➡</div> </button>
          
          </div>
    )
}


export default Pagination