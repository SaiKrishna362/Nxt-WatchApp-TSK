import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
  @media (max-width: 767px) {
    margin-top: 24px;
    padding: 30px 0 30px 20px;
  }
`

export const VideoContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 5px;
  align-self: center;
  margin-top: 40px;
`

export const VideoFrameContainer = styled.div`
  width: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ParaEl = styled.p`
  font-size: 15px;
  padding-left: 20px;
  padding-bottom: ${props => props.padding};
  @media (min-width: 768px) {
    align-self: flex-start;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const AttributesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
  align-items: center;
  border-bottom: 2px solid ${props => props.color};
  margin: 0 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`

export const ContentContainer = styled.div``

export const ImageEl = styled.img`
  height: 40px;
`
export const IconButtons = styled.button`
  border: 0px;
  background-color: inherit;
  cursor: pointer;
  color: ${props => props.iconColor};
  font-size: 15px;
  font-weight: 600;
  padding: 0 20px;
  display: flex;
  align-items: center;
`
export const DivContainer = styled.div`
  width: 30%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  height: 92vh;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  @media (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
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
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SidebarBottomContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
`
export const LogoList = styled.li``

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`
export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
`
export const Head = styled.h1``

export const Para = styled.p``
export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
`
