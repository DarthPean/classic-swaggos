/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ currentPage, paginate }) => {
  return (
    <ul className="pagination">
      <li>
        {/* <a onClick={() => paginate(currentPage - 1)}>Prev</a> */}
        <a onClick={() => paginate(currentPage + 1)}>Next</a>
      </li>
    </ul>
  );
};

export default Pagination;