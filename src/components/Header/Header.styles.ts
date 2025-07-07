import styled from "styled-components"

import { Breakpoints, Colors } from "../../styles/theme"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: ${Colors.rose};
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
  margin-bottom: 20px;
  display: inline-block;
  padding: 8px 16px;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`

export const Title = styled.h2`
  color: ${Colors.orange};
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
  color: ${Colors.orange};
  font-size: 36px;
  font-weight: bold;
  font-family: 'amoera', sans-serif;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 24px;
  }
`
