import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const HeaderContainer = styled.header`
  background-color: ${Colors.secondary};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${Colors.primary};
  font-family: 'amoera', sans-serif;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`

export const Navigation = styled.div`
  a {
    color: ${Colors.primary};
    font-size: 18px;
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
    border: 2px solid ${Colors.primary};
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
