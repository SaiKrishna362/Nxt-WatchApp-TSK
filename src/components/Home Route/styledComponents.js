import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: 24px;
    padding: 30px 0 30px 20px;
  }
`

export const HeadDiv = styled.div`
    border: 1px solid black;
    width: fit-content;
    border-radius: 4px;
    display: flex;
    background-color: #ffffff;
    align-items: center;
    margin-top: 30px;
}`

export const SearchIp = styled.input`
    width: 300px;
    outline: none;
    padding: 5px;
    border: none;
    @media (max-width:767px){
        width: 100%;
    }
}`

export const ButtonEl = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 3px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  padding: 25px;
  width: 85%;

  @media (max-width: 767px) {
    width: 95%;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    width: 300px;
    height: 270px;
  }
`

export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`

export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const NoVideosImage = styled.img`
  width: 30%;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-top: 30px;
  }
`
export const NoResultsHeading = styled.h1`
  @media (max-width: 767px) {
    font-size: large;
  }
`

export const NoResultsPara = styled.p`
  @media (max-width: 767px) {
    font-size: medium;
  }
`

export const NoResultsButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
`

/**/
export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 25px;
    padding-top: 50px;
  }
`
export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 50%;
  }
`
export const Head = styled.h1``

export const Para = styled.p``

export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: space-between;
  height: 92vh;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ListItems = styled.li`
  color: ${props => props.color};
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;

  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`

export const SpanEl = styled.h1`
  padding: 0 10px;
  font-size: 20px;
`

export const SidebarBottomContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
`
export const LogoList = styled.li``
