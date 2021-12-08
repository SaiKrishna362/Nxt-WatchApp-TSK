import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {AiOutlineSearch, AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {HiHome} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import AppTheme from '../../context/NxtWatch'

import {
  HomeContainer,
  HeadDiv,
  SearchIp,
  BannerContainer,
  ListContainer,
  NoVideosImage,
  NoResults,
  NoResultsHeading,
  NoResultsPara,
  NoResultsButton,
  ErrorContainer,
  Para,
  Head,
  Button,
  ErrorImg,
  DivContainer,
  ContactUsContainer,
  SidebarBottomContainer,
  LogoList,
  ContentDiv,
  ListItem,
  ParaTag,
  ImageTag,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    dataArray: [],
    apiStatus: apiConstants.initial,
    searchIp: '',
    showBanner: 'true',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchIp} = this.state
    this.setState({apiStatus: apiConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchIp}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        dataArray: data.videos,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onChange = e => {
    this.setState({searchIp: e.target.value})
  }

  onSearch = () => {
    const {searchIp} = this.state
    this.getVideos(searchIp)
  }

  onKey = e => {
    if (e.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  onClickCrossIcon = () => {
    this.setState({showBanner: false})
  }

  renderLoadingView = () => (
    <div className="loader-main-bg-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccessView = props => {
    const {dataArray} = this.state
    const {activeTheme} = props

    return (
      <div>
        {dataArray.length === 0 ? (
          <>
            <NoResults>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultsHeading>No Search results found</NoResultsHeading>
              <NoResultsPara>
                Try different key words or remove search filter
              </NoResultsPara>
              <NoResultsButton onClick={this.getVideos}>Retry</NoResultsButton>
            </NoResults>
          </>
        ) : (
          <>
            <ContentDiv>
              {dataArray.map(item => (
                <Link
                  to={`/videos/${item.id}`}
                  className={
                    activeTheme === 'light' ? 'link-light' : 'link-dark'
                  }
                  key={item.id}
                >
                  <ListContainer>
                    <ListItem>
                      <ImageTag
                        src={`${item.thumbnail_url}`}
                        width="100%"
                        alt="video thumbnail"
                      />
                    </ListItem>
                    <ListItem>
                      <div className="logo-div">
                        <ImageTag
                          src={`${item.channel.profile_image_url}`}
                          width="30px"
                          alt="channel logo"
                        />
                      </div>
                      <div>
                        <ParaTag fontSize="15px">{item.title}</ParaTag>
                        <ParaTag fontSize="12px">{item.channel.name}</ParaTag>
                        <ParaTag fontSize="12px">
                          {item.view_count} views . <p>{item.published_at}</p>
                        </ParaTag>
                      </div>
                    </ListItem>
                  </ListContainer>
                </Link>
              ))}
            </ContentDiv>
          </>
        )}
      </div>
    )
  }

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

  renderResult = props => {
    const {apiStatus} = this.state
    const {activeTheme} = props
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView({activeTheme})
      case apiConstants.failure:
        return this.renderFailure({activeTheme})

      default:
        return null
    }
  }

  render() {
    const {showBanner, searchIp} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#181818'

          return (
            <HomeContainer
              bgColor={`${bgColor}`}
              color={`${color}`}
              data-testid="home"
            >
              <div className="result-container">
                <DivContainer>
                  <ul>
                    <Link to="/">
                      <li className="left-list-container bg-highlight">
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
                      <li className="left-list-container">
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
                <div className="result-right-container">
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <button
                        type="button"
                        className="close-btn"
                        onClick={this.onClickCrossIcon}
                        data-testid="close"
                      >
                        <IoMdClose font-size="25" />
                      </button>
                      <div>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          className="banner-logo"
                        />
                        <p className="banner-heading">
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </p>
                        <button type="button" className="get-it-btn">
                          GET IT NOW
                        </button>
                      </div>
                    </BannerContainer>
                  )}
                  <HeadDiv>
                    <SearchIp
                      placeholder="Search Channel"
                      type="search"
                      value={searchIp}
                      onChange={this.onChange}
                      onKeyDown={this.onKey}
                    />
                    <button
                      type="button"
                      className="search-btn"
                      onClick={this.onSearch}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={20} />
                    </button>
                  </HeadDiv>
                  <div className="home-right-container">
                    {this.renderResult({activeTheme})}
                  </div>
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

export default Home
