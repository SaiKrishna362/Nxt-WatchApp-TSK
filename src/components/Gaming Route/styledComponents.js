import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
  @media (max-width: 767px) {
    margin-top: -25px;
  }
`

export const HeadDiv = styled.div`
  @media (max-width: 767px) {
    margin-top: 45px;
  }
`

export const HeaderEl = styled.h1`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 0;
  padding-left: 40px;
  display: flex;
  align-items: center;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 95%;
  }
`

export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
  @media (max-width: 767px) {
    width: 150px;
  }
`
export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  width: 100%;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`

export const DivContainer = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
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
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LogoList = styled.li``

export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
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
export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
