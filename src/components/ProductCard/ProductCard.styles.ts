import styled from "styled-components"
import { Breakpoints } from "../../styles/theme"

export const CardContainer = styled.div`
  width: 100%;
  max-width: 320px;
  min-height: 320px;
  font-family: 'Jomolhari', sans-serif;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: ${Breakpoints.tablet}) {
    max-width: 280px;
    min-height: 300px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 100%;
    min-height: 280px;
  }
`

export const CardImage = styled.div`
  background-color: #ffcaa6;
  background-size: cover;
  background-position: center;
  height: 140px;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    height: 120px;
  }
`

export const CardInfo = styled.div`
  padding-top: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h3`
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.4;
  color: #333;
  margin: 0 0 8px 0;
  font-weight: bold;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.1em;
  }
`

export const CardDescription = styled.p`
  font-size: 0.85em;
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.5;
  flex: 1;
  display: block;
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 0.8em;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #ddd;
  margin-top: auto;
`

export const CardPrice = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  color: #333;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.1em;
  }
`

export const CardButton = styled.button`
  border: 1px solid #252525;
  display: flex;
  padding: 0.4em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
  background: transparent;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    min-width: 32px;
    min-height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const CardText = styled.div`
  display: none;
`
