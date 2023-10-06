import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWatchlist } from '../redux/movieSlice';
import { toast } from 'react-toastify';

const WatchListCard = ({ movie }) => {
    const dispatch = useDispatch()
    const handleRemoveFromWatchList = (movieId) => {
        dispatch(removeFromWatchlist(movieId))
        toast.success("Removed from the watchlist")
    }
    return (
        <div className="container mt-4">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                            className="card-img"
                            alt={movie.backdrop_path}
                            style={{ maxHeight: "220px" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <Link to={`/single-movie/${movie.id}`}>
                                <h5 className="card-title text-dark" style={{ textDecoration: "none" }}>{movie.original_title}</h5>
                            </Link>

                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2" style={{ display: "grid", placeItems: "center" }}>
                        <button className='btn btn-sm btn-danger bg-danger' onClick={() => { handleRemoveFromWatchList(movie.id) }}><i class="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchListCard;
