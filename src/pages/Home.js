import React, { useEffect, useState } from 'react'
import HeroHeader from '../components/HeroHeader'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import { api_key } from '../utils/Constants'

const Home = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [searchString, setSearchString] = useState("")

    useEffect(() => {
        try {
            if (searchString.length > 0) {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchString}`).then((res) => {
                    setMovies(res.data)
                }).catch((error) => {
                    console.log(error);
                })
            } else {
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`).then((res) => {
                    setMovies(res.data)
                }).catch((error) => {
                    console.log(error);
                })
            }

        } catch (error) {
            console.log(error);
        }
    }, [page, searchString])
    console.log(movies);
    return (
        <>
            <HeroHeader setSearchString={setSearchString} />
            <div className='container'>
                <h1 className='text-muted mt-3'>All Movies</h1>
                <hr />
                <div className='row mt-3'>
                    {
                        movies && movies?.results?.map((el, index) => {
                            return <MovieCard data={el} key={index} />
                        })
                    }
                </div>
                <div className='row' style={{ display: "grid", placeItems: "center" }} >
                    <div className='m-4'>
                        <button className='btn  btn-dark bg-dark mr-2' onClick={() => {
                            setPage(page - 1)
                        }} disabled={page === 1 ? true : false}>Previous Page</button>  <button className='btn btn-dark bg-dark'>{page}</button>  <button className='btn btn-dark bg-dark ' onClick={() => {
                            setPage(page + 1)
                        }}>Next Page</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home