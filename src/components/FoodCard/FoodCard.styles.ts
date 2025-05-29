import styled from "styled-components"

import { Colors, Breakpoints } from "../../styles/theme"

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardContainer = styled.div`
  position: relative;
  width: 472px;
  height: 217px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  &:hover svg {
    scale: 0;
  }

  &:hover ${CardContent} {
    transform: rotateX(0deg);
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    max-width: 472px;
  }
`

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

export const ImageIcon = styled.div`
  svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;
  }
`

export const Badge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  z-index: 2;
`

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 10px;
`

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
`
