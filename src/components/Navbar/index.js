import {Link} from 'react-router-dom'
import {Component} from 'react'

// import ContactUs from '../ContactUs'
import AppTheme from '../../context/NxtWatch'
import {
  DivContainer,
  ContactUsContainer,
  SidebarBottomContainer,
  LogoList,
} from './styledComponents'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          console.log(activeTheme)

          return (
            <DivContainer>
              <ul className="left-content-links-container">
                <Link to="/" className="link-text">
                  <li className="left-list-container">
                    <h1 className="heading">Home</h1>
                  </li>
                </Link>
                <Link to="/trending" className="link-text">
                  <li className="left-list-container">
                    <h1 className="heading">Trending</h1>
                  </li>
                </Link>
                <Link to="/gaming" className="link-text">
                  <li className="left-list-container">
                    <h1 className="heading">Gaming</h1>
                  </li>
                </Link>
                <Link to="/saved-videos" className="link-text">
                  <li className="left-list-container">
                    <h1 className="heading">Saved videos</h1>
                  </li>
                </Link>
              </ul>

              <ContactUsContainer>
                <p>CONTACT US</p>
                <SidebarBottomContainer>
                  <LogoList>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="logo"
                    />
                  </LogoList>
                  <LogoList>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="logo"
                    />
                  </LogoList>
                  <LogoList>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="logo"
                    />
                  </LogoList>
                </SidebarBottomContainer>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </ContactUsContainer>
            </DivContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Navbar
