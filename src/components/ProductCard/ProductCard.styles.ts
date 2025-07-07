import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const CardContainer = styled.div`
  width: 320px;
  background-color: ${Colors.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
  }
`

export const CardImage = styled.div`
  width: 100%;
  height: 167px;
  overflow: hidden;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const CardContent = styled.div`
  padding: 16px;
  color: white;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 0 0 8px 0;
  line-height: 1.3;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: white;
  line-height: 1.4;
  margin: 0 0 16px 0;
  text-align: left;
`

export const CardButton = styled.button`
  width: 100%;
  background-color: ${Colors.secondary};
  color: ${Colors.primary};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #fff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`

// Remove estilos antigos não utilizados
export const CardInfo = styled.div`
  display: none;
`

export const CardFooter = styled.div`
  display: none;
`

export const CardPrice = styled.div`
  display: none;
`

export const CardText = styled.div`
  display: none;
`
