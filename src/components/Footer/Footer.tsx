import type React from "react"
import { FooterContainer, Logo, SocialIcons, SocialIcon, Copyright } from "./Footer.styles"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo>efood !!</Logo>
      <SocialIcons>
        <SocialIcon>📘</SocialIcon>
        <SocialIcon>📷</SocialIcon>
        <SocialIcon>🐦</SocialIcon>
      </SocialIcons>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos
        produtos é toda do estabelecimento contratado.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
