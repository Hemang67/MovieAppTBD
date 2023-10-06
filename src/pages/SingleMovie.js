

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { addToWatchlist } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { api_key } from '../utils/Constants';


const SingleMovie = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const lvDta = location.pathname.split("/")
    const movieid = lvDta[lvDta.length - 1]

    const [movie, setMovie] = useState({})
    useEffect(() => {
        try {
            axios.get(` https://api.themoviedb.org/3/movie/${movieid}?api_key=${api_key}`).then((res) => {
                setMovie(res.data)
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }, [movieid])

    const handleAddToWatchList = () => {
        dispatch(addToWatchlist(movie))
        toast.success("Added to watchlist")
    }
    return (
        <div >
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.backdrop_path}`}
                            className="card-img"
                            alt={movie?.backdrop_path}
                            style={{ maxHeight: "70vh" }}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">

                            <h5 className="card-title text-dark" style={{ textDecoration: "none" }}>{movie?.original_title}</h5>
                            <hr />
                            <p className="card-text">

                                {movie?.overview?.length > 100 ? <>
                                    {movie?.overview.slice(0, 100) + "..."}
                                </> : movie?.overview}
                            </p>
                            <hr />
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h5 className='mt-4'>Production Companies</h5>
                                    <ul>

                                        {movie.production_companies?.map((el, index) => {
                                            return <>
                                                <li>
                                                    {el.name}
                                                </li>
                                            </>
                                        })}
                                    </ul>
                                </div>
                                <div className='col-lg-6'>
                                    <h5 className='mt-4'>Production Countries</h5>
                                    <ul>

                                        {movie.production_countries?.map((el, index) => {
                                            return <>
                                                <li>
                                                    {el.name}
                                                </li>
                                            </>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className='row pl-4'>
                                <div>
                                    <h5 className='mt-4'>Languages</h5>
                                    <ul>

                                        {movie.spoken_languages?.map((el, index) => {
                                            return <>
                                                <li>
                                                    {el.english_name}
                                                </li>
                                            </>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <hr />

                            <div style={{ marginTop: "30px" }}>
                                <span className='text-muted'>
                                    Release Date: {movie?.release_date}
                                </span>                <button className='btn btn-light bg-light float-right' title='Add to wishlist' onClick={handleAddToWatchList}><i class="fa fa-bookmark-o text-dark" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
