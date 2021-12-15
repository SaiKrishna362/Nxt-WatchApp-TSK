import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiHome} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillFire} from 'react-icons/ai'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import AppTheme from '../../context/NxtWatch'

import {
  HomeContainer,
  ListContainer,
  ListItem,
  ContentDiv,
  ImageTag,
  ParaTag,
  HeadDiv,
  HeaderEl,
  DivContainer,
  ContactUsContainer,
  SidebarBottomContainer,
  LogoList,
  ErrorContainer,
  Para,
  Head,
  Button,
  ErrorImg,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {dataArray: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      await this.setState({
        dataArray: data.videos,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-main-bg-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderFailure = props => {
    const {activeTheme} = props
    return (
      <ErrorContainer>
        {activeTheme === 'light' ? (
          <ErrorImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
        ) : (
          <ErrorImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure view"
          />
        )}
        <Head>Oops! Something Went Wrong</Head>
        <Para>
          We are having some trouble to complete your request. Please try again.
        </Para>
        <Button onClick={this.getVideos}>Retry</Button>
      </ErrorContainer>
    )
  }

  renderSuccessView = props => {
    const {activeTheme} = props
    const {dataArray} = this.state
    return (
      <div className="trending-right-container">
        <ContentDiv>
          {dataArray.map(item => (
            <Link
              to={`/videos/${item.id}`}
              className={activeTheme === 'light' ? 'link-light' : 'link-dark'}
              key={item.id}
            >
              <ListContainer key={item.id}>
                <ListItem>
                  <ImageTag
                    src={`${item.thumbnail_url}`}
                    width="180px"
                    alt="video thumbnail"
                  />
                </ListItem>
                <ListItem>
                  <ParaTag fontSize="15px">{item.title}</ParaTag>
                </ListItem>
                <ListItem>
                  <ParaTag fontSize="12px">
                    {item.view_count} Watching Worldwide
                  </ParaTag>
                </ListItem>
              </ListContainer>
            </Link>
          ))}
        </ContentDiv>
      </div>
    )
  }

  renderResult = props => {
    const {apiStatus} = this.state
    const {activeTheme, color} = props
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView({activeTheme, color})
      case apiConstants.failure:
        return this.renderFailure({activeTheme})

      default:
        return null
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value

          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f'

          return (
            <HomeContainer
              data-testid="gaming"
              bgColor={`${bgColor}`}
              color={`${color}`}
            >
              <div className="result-container">
                <DivContainer>
                  <ListContainer>
                    <Link to="/">
                      <li className="left-list-container">
                        <HiHome />
                        <h1 className="heading">Home</h1>
                      </li>
                    </Link>

                    <Link to="/trending">
                      <li
                        className="left-list-container"
                        onClick={this.onClickTrendingList}
                      >
                        <AiFillFire />
                        <h1 className="heading">Trending</h1>
                      </li>
                    </Link>
                    <Link to="/gaming">
                      <li className="left-list-container bg-highlight">
                        <SiYoutubegaming />
                        <h1 className="heading">Gaming</h1>
                      </li>
                    </Link>
                    <Link to="/saved-videos">
                      <li className="left-list-container">
                        <MdPlaylistAdd />
                        <h1 className="heading">Saved videos</h1>
                      </li>
                    </Link>
                  </ListContainer>
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
                <div className="home-right-container">
                  <HeadDiv>
                    <HeaderEl
                      bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
                      color={color}
                    >
                      <SiYoutubegaming
                        size={40}
                        className={`trend-icon ${activeTheme}-icon`}
                      />
                      Gaming
                    </HeaderEl>
                  </HeadDiv>
                  {this.renderResult({activeTheme, color})}
                </div>
              </div>
              )
            </HomeContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Gaming
