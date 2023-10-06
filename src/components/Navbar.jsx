import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >
                Watch Movies
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                </ul>

                <Link to="/watchlist">
                    <button className="btn btn-outline-success my-2 my-sm-0" >
                        Wishlist <i className="fa fa-bookmark-o pl-2" aria-hidden="true"></i>
                    </button>
                </Link>

            </div>
        </nav>

    )
}

export default Navbar