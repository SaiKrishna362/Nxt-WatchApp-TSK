import styled from 'styled-components'

export const SavedVideosMainDiv = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100%;
  @media (max-width: 767px) {
    height: fit-content;
  }
`
export const MainHeader = styled.h1`
  background-color: ${props => props.bgColor};
  padding: 20px;
  width: 100%;
`

export const UnSavedVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.color};
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`

export const SavedVideosDiv = styled.div`
  color: ${props => props.color};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    padding: 30px 30px;
    padding-bottom: 0px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  @media (max-width: 767px) {
    align-self: baseline;
    padding: 10px;
  }
`

export const ListItems = styled.li`
  padding: 10px;
  font-size: ${props => props.fs};
  @media (max-width: 767px) {
    padding: 5px;
    font-size: 15px;
  }
`

export const VideosImageEl = styled.img`
  @media (min-width: 768px) {
    width: 40%;
    height: 40%;
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
  }
`

export const NoVideosImageEl = styled.img`
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
    padding-top: 5%;
  }
  @media (min-width: 768px) {
    width: 50%;
    object-fit: contain;
    padding: 30px 40px;
  }
`
export const NotFoundHead = styled.h2``

export const NotFoundPara = styled.p``

export const DivContainer = styled.div`
  margin-top: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92vh;
  @media (max-width: 767px) {
    display: none;
  }
`

export const SpanEl = styled.h1`
  padding: 0 10px;
  font-size: 20px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const SidebarBottomContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
`
export const LogoList = styled.li``
