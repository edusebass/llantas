import React from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="">
            {pageNumbers.map((number) => (
                <button 
                    className={`font-extrabold mr-3 p-3 justify-center sm:mr- sm:mb-2 sm:p-3 border-black 
                    rounded-full bg-slate-200 ${currentPage === number ? 'bg-slate-400' : 'font-semibold'}`}
                    key={number} 
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
