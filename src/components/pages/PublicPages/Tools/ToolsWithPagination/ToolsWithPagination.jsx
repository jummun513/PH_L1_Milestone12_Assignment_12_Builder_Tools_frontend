import { useState } from "react";
import ReactPaginate from "react-paginate";
import ToolsCard from "../../../../shared/ToolsCard/ToolsCard";
import PropTypes from 'prop-types';

const ToolsWithPagination = ({ itemsPerPage, items }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="grid gap-x-5 gap-y-7 2xl:gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
                {currentItems && currentItems.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)}
            </div>
            <ReactPaginate className="mt-16 text-gray-800 md:mt-20 flex justify-center md:justify-end gap-x-2 md:gap-x-3 md:pe-8 lg:pe-20 xl:pe-10"
                previousLabel={'Back'}
                nextLabel={'Forward'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item hidden md:block'}
                pageLinkClassName={'page-link border-2 border-primary px-4 py-2 hover:bg-primary hover:text-gray-100 rounded-md'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link border-2 border-primary px-4 py-2 hover:bg-primary hover:text-gray-100 rounded-md'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link border-2 border-primary px-4 py-2 hover:bg-primary hover:text-gray-100 rounded-md'}
                breakClassName={'page-item hidden xl:block'}
                activeClassName={"active text-gray-50"}
                activeLinkClassName={"active bg-primary text-gray-100"}
            />
        </>
    );
};

export default ToolsWithPagination;


ToolsWithPagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
};