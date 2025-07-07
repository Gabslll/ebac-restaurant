import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const RestaurantContainer = styled.div`
  padding: 56px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 32px 10px;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-items: center;

  @media (max-width: ${Breakpoints.desktop}) {
    gap: 24px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${Colors.text};
  margin-bottom: 32px;
  text-align: center;
  font-weight: bold;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: ${Colors.textLight};
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${Colors.textLight};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: ${Colors.text};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`
