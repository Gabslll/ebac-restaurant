import styled from "styled-components"
import { Breakpoints } from "../../styles/theme"

export const RestaurantContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 32px;
  justify-items: center;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 24px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
  }
`
