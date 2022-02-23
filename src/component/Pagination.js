/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ currentPage, paginate }) => {
  return (
    <ul className="pagination justify-content-center">
      <li>
        {/* <a onClick={() => paginate(currentPage - 1)}>Prev</a> */}
        
        <a onClick={() => paginate(currentPage + 1)}>Show More</a>
      </li>
    </ul>
  );
};

export default Pagination;
