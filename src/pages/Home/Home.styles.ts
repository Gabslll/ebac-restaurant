import styled from "styled-components"

import { Breakpoints, Colors } from "../../styles/theme"

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.background};
`
export const MainContent = styled.main`
  flex: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  justify-items: center;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
