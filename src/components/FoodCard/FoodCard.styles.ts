import styled, { keyframes } from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

const effectOne = keyframes`
  0% {
    transform: translateX(-99%);
  }
  25% {
    transform: translateX(-90%);
  }
  50% {
    transform: translateX(-80%);
  }
  75% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(-99%);
  }
`

const effectTwo = keyframes`
  to {
    transform: translateX(-1%);
  }
  from {
    transform: translateX(-99%);
  }
`

export const CardContainer = styled.div`
  width: 472px;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 8px;

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    right: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(5deg);
    transition: all 0.1s ease-in;
  }

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    left: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(-5deg);
    transition: all 0.1s ease-in;
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
  }

  &:hover::before {
    transform: rotate(-8deg);
  }

  &:hover::after {
    transform: rotate(8deg);
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    max-width: 472px;
  }
`

export const CardImage = styled.div<{ $backgroundImage: string }>`
  position: relative;
  background: #007c0d;
  background: linear-gradient(315deg, #68ffc0, #007c0d);
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 217px;
  border-radius: 4px;
`

export const Badge = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  background-color: white;
  top: 10px;
  left: 10px;
  padding: 3px 7px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in;
  user-select: none;
  z-index: 2;

  &:hover {
    transform: translateX(5px);
  }
`

export const CardContent = styled.div`
  padding: 20px 0 0 0;
`

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Jomolhari', sans-serif;
  margin-bottom: 10px;
  color: ${Colors.black};
`

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.black};
  line-height: 1.4;
  margin-bottom: 20px;
  font-family: 'Jomolhari', sans-serif;
`

export const CardButton = styled.button`
  font-family: 'Jomolhari', sans-serif;
  cursor: pointer;
  margin: 20px 0 0 0;
  padding: 7px 20px;
  width: 100%;
  background-color: rgb(216, 255, 234);
  border: none;
  color: black;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
  transition: box-shadow 0.1s ease-in;
  user-select: none;
  border-radius: 4px;

  &:active {
    box-shadow: 0px 0px 15px rgba(0, 119, 255, 0.5);
  }

  &:hover::before {
    animation: ${effectTwo} 0.4s 1;
  }

  &::before {
    content: 'SAIBA MAIS';
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #007c0d;
    background: linear-gradient(315deg, #68ffc0, #007c0d);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-99%);
    z-index: 1;
    animation: ${effectOne} 10s infinite;
  }

  &:hover::before {
    transform: translateX(0%);
  }
`

// Manter os outros exports para compatibilidade
export const ImageIcon = styled.div`
  display: none;
`

export const CardRating = styled.div`
  display: none;
`
