import type React from "react"
import { FooterContainer, Logo, SocialIcons, SocialIcon, Copyright } from "./Footer.styles"

import Facebook from "../../assets/images/facebook.png"
import Instagram from "../../assets/images/instagram.png"
import Twitter from "../../assets/images/twitter.png"
import Efood from "../../assets/images/logo.png"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo><img src={Efood} alt="Efood Logo" /></Logo>
      <SocialIcons>
        <SocialIcon><img src={Facebook} alt="Facebook" /></SocialIcon>
        <SocialIcon><img src={Instagram} alt="Instagram" /></SocialIcon>
        <SocialIcon><img src={Twitter} alt="Twitter" /></SocialIcon>
      </SocialIcons>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos
        produtos é toda do estabelecimento contratado.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
