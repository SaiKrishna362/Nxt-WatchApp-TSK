import {Link} from 'react-router-dom'

import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {formatDistanceToNow} from 'date-fns'
import {HiHome} from 'react-icons/hi'
import './index.css'
import AppTheme from '../../context/NxtWatch'

import {
  SavedVideosMainDiv,
  UnSavedVideosDiv,
  SavedVideosDiv,
  NotFoundHead,
  NotFoundPara,
  NoVideosImageEl,
  ListContainer,
  ContactUsContainer,
  SidebarBottomContainer,
  LogoList,
  MainHeader,
  DivContainer,
} from './styledComponents'

const SavedVideos = () => (
  <AppTheme.Consumer>
    {values => {
      const {activeTheme, savedVideos} = values
      const bgColor = activeTheme === 'light' ? '#ffffff' : '#0f0f0f'
      const color = activeTheme === 'light' ? '#0f0f0f' : '#ffffff'
      return (
        <SavedVideosMainDiv
          bgColor={bgColor}
          color={color}
          data-testid="savedVideos"
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
                  <li className="left-list-container">
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
                  <li className="left-list-container bg-highlight">
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
              {savedVideos.length === 0 ? (
                <UnSavedVideosDiv>
                  <NoVideosImageEl
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NotFoundHead>No saved videos found</NotFoundHead>
                  <NotFoundPara>
                    You can save your videos while watching them
                  </NotFoundPara>
                </UnSavedVideosDiv>
              ) : (
                <div className="saved-v-container">
                  <MainHeader
                    bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
                  >
                    <MdPlaylistAdd color="red" /> Saved Videos
                  </MainHeader>
                  <ul className="saved-videos-ul-container">
                    {savedVideos.map(data => (
                      <Link
                        to={`/videos/${data.id}`}
                        className={
                          activeTheme === 'light' ? 'link-light' : 'link-dark'
                        }
                        key={data.id}
                      >
                        <li className="saved-videos-card-list">
                          <SavedVideosDiv>
                            <img
                              src={data.thumbnailUrl}
                              alt="video thumbnail"
                              className="saved-videos-image"
                            />
                            <div>
                              <p>{data.title}</p>
                              <p>{data.channel.name}</p>
                              <p>{data.viewCount} views </p>
                              <p>
                                {formatDistanceToNow(
                                  new Date(data.publishedAt),
                                )}
                              </p>
                            </div>
                          </SavedVideosDiv>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </SavedVideosMainDiv>
      )
    }}
  </AppTheme.Consumer>
)

export default SavedVideos
