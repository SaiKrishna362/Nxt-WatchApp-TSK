import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiHome} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'

import './index.css'

import AppTheme from '../../context/NxtWatch'

import {
  HeaderContainer,
  HeaderContentsSmallContainer,
  HeaderContentsLargeContainer,
  ImageEl,
  ButtonElSmall,
  ButtonElLarge,
  ExtraDiv,
} from './styledComponents'

class Header extends Component {
  state = {displayHeader: 'none'}

  showHeader = () => {
    this.setState({displayHeader: 'block'})
  }

  hideHeader = () => {
    this.setState({displayHeader: 'none'})
  }

  logOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {displayHeader} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#0f0f0f'
          const onChangeTheme = () => {
            const val = activeTheme === 'light' ? 'dark' : 'light'
            changeTheme(val)
          }

          return (
            <HeaderContainer bgColor={`${bgColor}`}>
              <Link to="/">
                <ImageEl
                  height="25px"
                  i
                  src={
                    activeTheme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                  onClick={this.onClickLogo}
                  cursor="pointer"
                />
              </Link>
              <HeaderContentsSmallContainer>
                <ButtonElSmall
                  data-testid="theme"
                  onClick={onChangeTheme}
                  color={`${color}`}
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} />
                  )}
                </ButtonElSmall>

                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      <GiHamburgerMenu size={25} />
                    </button>
                  }
                >
                  {close => (
                    <div className="modal-container">
                      <button
                        type="button"
                        className="close-button"
                        onClick={() => close()}
                      >
                        <IoMdClose />
                      </button>
                      <ul>
                        <Link to="/">
                          <li className="left-list-container">
                            <HiHome />
                            <h1>Home</h1>
                          </li>
                        </Link>

                        <Link to="/trending">
                          <li
                            className="left-list-container"
                            onClick={this.onClickTrendingList}
                          >
                            <AiFillFire />
                            <h1>Trending</h1>
                          </li>
                        </Link>
                        <Link to="/gaming">
                          <li className="left-list-container">
                            <SiYoutubegaming />
                            <h1>Gaming</h1>
                          </li>
                        </Link>
                        <Link to="/saved-videos">
                          <li className="left-list-container">
                            <MdPlaylistAdd />
                            <h1>Saved videos</h1>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      <FiLogOut size={25} />
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div>
                        <p>Are you sure, you want to logout</p>
                      </div>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="confirm-btn"
                        onClick={this.logOut}
                      >
                        Confirm
                      </button>
                    </>
                  )}
                </Popup>
              </HeaderContentsSmallContainer>
              <ExtraDiv display={displayHeader}>
                <ul>
                  <Link to="/">
                    <li className="left-list-container">
                      <HiHome />
                      <h1>Home</h1>
                    </li>
                  </Link>

                  <Link to="/trending">
                    <li
                      className="left-list-container"
                      onClick={this.onClickTrendingList}
                    >
                      <AiFillFire />
                      <h1>Trending</h1>
                    </li>
                  </Link>
                  <Link to="/gaming">
                    <li className="left-list-container">
                      <SiYoutubegaming />
                      <h1>Gaming</h1>
                    </li>
                  </Link>
                  <Link to="/saved-videos">
                    <li className="left-list-container">
                      <MdPlaylistAdd />
                      <h1>Saved videos</h1>
                    </li>
                  </Link>
                </ul>
              </ExtraDiv>
              <HeaderContentsLargeContainer>
                <ButtonElLarge
                  border="none"
                  onClick={onChangeTheme}
                  color={color}
                  data-testid="theme"
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} className="animate" />
                  )}
                </ButtonElLarge>
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  margin="30px"
                />
                <Popup
                  modal
                  trigger={
                    <button type="button" className="logout-button">
                      Logout
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div>
                        <p>Are you sure, you want to logout</p>
                      </div>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="confirm-btn"
                        onClick={this.logOut}
                      >
                        Confirm
                      </button>
                    </>
                  )}
                </Popup>
              </HeaderContentsLargeContainer>
            </HeaderContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(Header)
