import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: -21px;
  }
`

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeadDiv = styled.div`
  @media (max-width: 767px) {
    margin-top: 45px;
  }
`

export const HeaderEl = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 0;
  padding-left: 40px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 40%;
  }
`

export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
  width: 350px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const LogoImage = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 30px;
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`
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
  margin-left: 30px;
`

export const LogoList = styled.li``
