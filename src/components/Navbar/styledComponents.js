import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
