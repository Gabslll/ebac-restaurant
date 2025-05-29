import styled from "styled-components"

import { Colors } from "../../styles/theme"

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  --s: 100px;
  --c1:rgb(236, 133, 92);
  --c2:rgb(199, 213, 226);
  --_g: var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%,
    var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%,
    var(--c1) 76% 84%, var(--c2) 86% 94%;
  background: radial-gradient(
      100% 100% at 100% 0,
      var(--c1) 4%,
      var(--_g),
      #0008 96%,
      #0000
    ),
    radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #0008 4%,
        var(--_g),
        var(--c1) 96%
      )
      var(--c1);
  background-size: var(--s) var(--s);
  padding: 40px 20px;
  text-align: center;
  margin-top: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.h2`
  color: ${Colors.black};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border: 2px solid ${Colors.black};
  display: inline-block;
  padding: 6px 12px;
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
  background-color: ${Colors.black};
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
`

export const Copyright = styled.p`
  color: ${Colors.black};
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.4;
`
