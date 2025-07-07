import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const HeaderContainer = styled.header`
width: 100%;
  height: 100%;
  --s: 100px;
  --c1:rgb(250, 209, 192);
  --c2:rgb(250, 222, 204);
  --_g: var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%,
    var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%,
    var(--c1) 76% 84%, var(--c2) 86% 94%;
  background: radial-gradient(
      100% 100% at 100% 0,
      var(--c1) 4%,
      var(--_g),
      #0008 96%,
      #0000
    ),
    radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #0008 4%,
        var(--_g),
        var(--c1) 96%
      )
      var(--c1);
  background-size: var(--s) var(--s);
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
