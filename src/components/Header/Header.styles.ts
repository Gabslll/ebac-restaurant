import styled from "styled-components"

import { Breakpoints, Colors } from "../../styles/theme"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  --s: 100px;
  --c1:rgb(197, 142, 121);
  --c2:rgb(106, 119, 131);
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
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Breakpoints.mobile}) {
    min-height: 150px;
    padding: 20px;
  }
`

export const Logo = styled.h1`
  color: ${Colors.black};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  border: 2px solid ${Colors.black};
  display: inline-block;
  padding: 8px 16px;
  font-family: 'amoera', sans-serif;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`

export const Title = styled.h2`
  color: ${Colors.black};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'amoera', sans-serif;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 24px;
    margin-bottom: 5px;
  }
`

export const Subtitle = styled.h3`
  color: ${Colors.black};
  font-size: 36px;
  font-weight: bold;
  font-family: 'amoera', sans-serif;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 24px;
  }
`
