import styled from "styled-components"
import { Colors } from "../../styles/theme"

export const HeroContainer = styled.div<{ $backgroundImage: string }>`
  position: relative;
  height: 280px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;
  color: white;
  font-family: 'amoera', sans-serif;

`

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const CategoryLabel = styled.span`
  color: ${Colors.gray};
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
  z-index: 2;
  position: relative;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  z-index: 2;
  position: relative;
`
