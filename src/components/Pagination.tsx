import React from 'react';
import {GrLinkPrevious, GrLinkNext} from 'react-icons/gr';


interface PaginationProps {
    maxLimit: number;
    minLimit: number;
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    setMaxPageNumberLimit: (page: number) => void;
    setMinPageNumberLimit: (page: number) => void;
    pageNumberLimit: number;
}

const handleNextBtn = (setCurrentPage: (page: number) => void, currentPage: number, totalPages: number,  maxLimit: number,
setMaxPageNumberLimit: (page: number) => void, setMinPageNumberLimit: (page: number) => void, pageNumberLimit: number, minLimit: number) => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
    }
    if(currentPage + 1  > maxLimit) {
            setMaxPageNumberLimit(maxLimit +  pageNumberLimit);
            setMinPageNumberLimit(minLimit +  pageNumberLimit);
        }
        
};

const handlePrevtBtn = (setCurrentPage: (page: number) => void, currentPage: number,  maxLimit: number,
setMaxPageNumberLimit: (page: number) => void, setMinPageNumberLimit: (page: number) => void, pageNumberLimit: number, minLimit: number) => {
    
    setCurrentPage(currentPage - 1);
    if((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxLimit -  pageNumberLimit);
            setMinPageNumberLimit(minLimit -  pageNumberLimit);
        }
    console.log(currentPage);

};

const Pagination: React.FC<PaginationProps> = ({ 
    totalPages, 
    currentPage, 
    setCurrentPage, 
    maxLimit, 
    setMaxPageNumberLimit, 
    setMinPageNumberLimit, 
    pageNumberLimit, 
    minLimit 
}) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex flex-row flex-wrap justify-center p-5">
            <button className={`font-bold mr-2 rounded-lg bg-blue-500 p-3 text-white ${currentPage === 1 ? 'hidden': ''}`}
            onClick={() => handlePrevtBtn(setCurrentPage, currentPage, maxLimit, setMaxPageNumberLimit, setMinPageNumberLimit, pageNumberLimit, minLimit)}>
            <GrLinkPrevious/></button>
            
            {pageNumbers.map((number) => (
                number < maxLimit + 1 && (
                    <button
                        className={`font-extrabold mr-1 p-2 justify-center sm:mr-3 sm:mb-2 sm:p-3 border-black 
                        rounded-full bg-slate-200 ${currentPage === number ? 'bg-slate-400' : 'font-semibold'}`}
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >
                        
                        {number}
                        
                    </button>
                    
                )
            ))}
            
            <button
            className=' flex-row font-bold mr-2 rounded-lg bg-blue-500 p-3 text-white' 
            onClick={() => handleNextBtn(setCurrentPage, currentPage, totalPages, maxLimit, setMaxPageNumberLimit, setMinPageNumberLimit, pageNumberLimit, minLimit)}>
            <GrLinkNext className="flex"/></button>

        </div>
    );
};

export default Pagination;


