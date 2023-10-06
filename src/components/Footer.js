import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  Smit Suthar
                  <span />
                </h5>
                <p>Hello, Nice to meet you </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links
                  <span />
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <Link to="/">Home</Link>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <Link to="/watchlist">Watchlist</Link>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Get Started
                  <span />
                </h5>

                <Link to="/">

                  <button className='btn'> Home</button>

                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us
                  <span />
                </h5>
                <p>
                  <a href="mailto:smitsuthar321@gmail.com" title="Mail to me" >
                    smitsuthar321@gmail.com
                  </a>
                </p>
                <ul className="social-footer2">
                  <li className="">
                    <a href='https://www.linkedin.com/in/smit-suthar-81b048207/' rel="noreferrer" target='_blank'>
                      <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Smit Suthar © 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer