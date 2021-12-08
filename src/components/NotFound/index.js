import {Link} from 'react-router-dom'
import {FaFireAlt} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="home-main-container">
    <Header />
    <div className="home-container">
      <div className="left-container">
        <ul className="left-content-links-container">
          <Link to="/" className="link-text">
            <li className="left-list-container" key="1">
              <AiFillHome className={`home-icons `} />
              <h1 className="left-link">Home</h1>
            </li>
          </Link>
          <Link to="/trending" className="link-text">
            <li className="left-list-container" key="2">
              <FaFireAlt className="home-icons" />
              <h1 className="left-link ">Trending</h1>
            </li>
          </Link>
          <Link to="/gaming" className="link-text">
            <li className="left-list-container" key="3">
              <SiYoutubegaming className="home-icons" />
              <h1 className="left-link">Gaming</h1>
            </li>
          </Link>
          <Link to="/saved-videos" className="link-text">
            <li className="left-list-container" key="4">
              <MdPlaylistAdd className="home-icons" />
              <h1 className="left-link">Saved</h1>
            </li>
          </Link>
        </ul>
        <div className="contact-us-container">
          <h1 className="contact-us-heading">Contact Us</h1>
          <div className="ftl-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="ftl-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="ftl-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="ftl-logo"
            />
          </div>
          <p className="contact-us-para">
            Enjoy!Now to see your channels and recommendations!
          </p>
        </div>
      </div>
      <div className="right-container">
        {' '}
        <div className="right-main-bg-container">
          <div className="zero-list-container">
            <div className="zero-list-text-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
                className="failure-image"
              />
              <h1 className="failure-heading">Page Not Found</h1>
              <p className="failure-para">
                we are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default NotFound
