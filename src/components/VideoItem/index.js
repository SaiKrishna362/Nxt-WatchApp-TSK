import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import {AiOutlineLike, AiOutlineDislike, AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {HiHome} from 'react-icons/hi'

import {
  HomeContainer,
  VideoFrameContainer,
  VideoContainer,
  ParaEl,
  AttributesContainer,
  ChannelContainer,
  ImageEl,
  ContentContainer,
  IconButtons,
  DivContainer,
  ListContainer,
  LogoList,
  SidebarBottomContainer,
  ContactUsContainer,
  ErrorContainer,
  ErrorImg,
  Head,
  Para,
  Button,
} from './styledComponents'

import AppTheme from '../../context/NxtWatch'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class VideoCard extends Component {
  state = {
    videoDetails: {},
    channelDataObj: {},
    liked: false,
    disliked: false,
    saved: false,
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const responseData = await response.json()
      const data = responseData.video_details
      const convertedData = {
        channel: data.channel,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      }

      this.setState({
        videoDetails: convertedData,
        channelDataObj: channelData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    if (disliked) {
      this.setState({disliked: false})
    } else {
      this.setState({disliked: true})
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({disliked: false})
    }
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true})
    }
  }

  isSaved = () => {
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  }

  renderSuccessView = props => {
    const {videoDetails, channelDataObj, liked, disliked, saved} = this.state
    const {videoUrl, title, viewCount, publishedAt, description} = videoDetails
    const {addSavedVideos, bgColor, color} = props

    const onSave = () => {
      this.isSaved()
      if (saved) {
        addSavedVideos({videoDetails, saved})
      } else {
        addSavedVideos({videoDetails, saved})
      }
    }

    return (
      <VideoContainer bgColor={bgColor} color={color}>
        <VideoFrameContainer>
          <ReactPlayer url={videoUrl} controls className="react-player" />
          <ParaEl>{title}</ParaEl>
        </VideoFrameContainer>
        <AttributesContainer>
          <ParaEl>
            {viewCount} views . {publishedAt}
          </ParaEl>
          <ChannelContainer color={color}>
            <IconButtons
              onClick={this.isLiked}
              iconColor={liked ? '#2563eb' : '#64748b'}
            >
              <AiOutlineLike size={20} /> Like
            </IconButtons>
            <IconButtons
              onClick={this.isDisliked}
              iconColor={disliked ? '#2563eb' : '#64748b'}
            >
              <AiOutlineDislike size={20} /> Dislike
            </IconButtons>
            <IconButtons onClick={onSave} iconColor={saved ? '#3b82f6' : color}>
              <MdPlaylistAdd size={20} /> {saved ? 'Saved' : 'Save'}
            </IconButtons>
          </ChannelContainer>
        </AttributesContainer>
        <ChannelContainer>
          <ImageEl src={channelDataObj.profileImageUrl} alt="channel logo" />
          <ContentContainer>
            <ParaEl>{channelDataObj.name}</ParaEl>
            <ParaEl>{channelDataObj.subscriberCount}</ParaEl>
          </ContentContainer>
        </ChannelContainer>
        <ParaEl padding="30px">{description}</ParaEl>
      </VideoContainer>
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
        <Button onClick={this.getData}>Retry</Button>
      </ErrorContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-main-bg-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderResult = props => {
    const {apiStatus} = this.state
    const {activeTheme, addSavedVideos, bgColor, color} = props
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView({
          addSavedVideos,
          bgColor,
          color,
        })
      case apiConstants.failure:
        return this.renderFailure({activeTheme})

      default:
        return null
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {values => {
          const {activeTheme, addSavedVideos} = values
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#0f0f0f'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'

          return (
            <HomeContainer
              bgColor={`${bgColor}`}
              color={`${color}`}
              data-testid="videoItemDetails"
            >
              <div className="video-result-container">
                <DivContainer bgColor={bgColor} color={color}>
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
                  {this.renderResult({
                    activeTheme,
                    addSavedVideos,
                    bgColor,
                    color,
                  })}
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

export default VideoCard
