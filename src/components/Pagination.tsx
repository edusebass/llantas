import React from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, setCurrentPage }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="">
            {pageNumbers.map((number) => (
                <button className=" font-extrabold mr-4 justify-center sm:mr-16 sm:mb-2" key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
