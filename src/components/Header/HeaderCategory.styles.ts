import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: ${Colors.rose};
  background-color: ${Colors.secondary};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'amoera', sans-serif;
    z-index: 10;

    @media (max-width: ${Breakpoints.mobile}) {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
`

export const Navigation = styled.div`
  a {
    color: ${Colors.primary};
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Logo = styled.h1`
  a {
    color: ${Colors.primary};
    font-size: 36px;
    font-weight: bold;
    text-decoration: none;
    padding: 8px 16px;
    display: inline-block;
    margin-left: 24px;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const CartInfo = styled.div`
  color: ${Colors.primary};
  font-size: 18px;
  font-weight: bold;
`
