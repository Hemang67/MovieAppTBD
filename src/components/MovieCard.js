import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToWatchlist } from '../redux/movieSlice'
import { toast } from 'react-toastify'

const MovieCard = ({ data }) => {
    const dispatch = useDispatch()
    const handleAddToWatchList = () => {
        dispatch(addToWatchlist(data))
        toast.success("Added to watchlist")
    }
    return (
        <div className='col-lg-4 '>
            <div className="card m-2" >
                <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.backdrop_path}`} alt="Card cap" style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} />
                <div className="card-body">
                    <Link to={`/single-movie/${data.id}`}>
                        <h5 className="card-title text-dark" style={{ textDecoration: "none" }}>{data.original_title}</h5>
                    </Link>
                    <p className="card-text">

                        {data.overview.length > 100 ? <>
                            {data.overview.slice(0, 100) + "..."}
                        </> : data.overview}
                    </p>
                    <span className='text-muted'>
                        Release Date: {data.release_date}
                    </span>
                    <button className='btn btn-light bg-light float-right' title='Add to wishlist' onClick={handleAddToWatchList} ><i class="fa fa-bookmark-o text-dark" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>

    )
}

export default MovieCard