import React, { useState } from 'react';
import WatchListCard from '../components/WatchListCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WatchList = () => {
    const watchlistMovies = useSelector((state) => state.watchlist);

    // Number of items to display per page
    const itemsPerPage = 5;

    // State variables for pagination
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the watchlistMovies array based on the current page
    const displayedMovies = watchlistMovies.slice(startIndex, endIndex);

    // Handle next and previous page actions
    const nextPage = () => {
        if (endIndex < watchlistMovies.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (displayedMovies.length > 0) {
        return (
            <>
                <div style={{ minHeight: "55vh" }}>
                    {displayedMovies.map((el, index) => {
                        return <WatchListCard movie={el} key={index} />;
                    })}
                </div>
                <div className='w-100 p-4' style={{ display: "grid", placeItems: "center" }}>
                    <div className="pagination">
                        <button className="btn bg-dark" onClick={prevPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <button className='btn bg-dark ml-1 mr-1'><span className="page-number">{currentPage}</span></button>
                        <button className="btn bg-dark" onClick={nextPage} disabled={endIndex >= watchlistMovies.length}>
                            Next
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='text-center' style={{ height: "50vh" }}>
                    <h2 className='text-muted mt-5'>No movies added to watchlist</h2>
                    <Link to="/">
                        <button className='btn mt-3'>Back to home</button>
                    </Link>
                </div>
            </>
        );
    }
};

export default WatchList;
