import styled from "styled-components"

import { Breakpoints, Colors } from "../../styles/theme"

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: ${Colors.rose};
  padding: 40px 20px;
  text-align: center;
  margin-top: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
    z-index: 10;

    @media (max-width: ${Breakpoints.mobile}) {
      min-height: 150px;
      padding: 20px;
    }
`

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  display: inline-block;
  padding: 6px 12px;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
`

export const Copyright = styled.p`
  color: ${Colors.black};
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.4;

  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  border-radius: 4px;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 9px;
    max-width: 300px;
  }
`
