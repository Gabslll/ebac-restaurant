import type React from "react"
import { HeaderContainer, Logo, Title, Subtitle } from "./Header.styles"
import Efood from "../../assets/images/logo.png"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={Efood} alt="Efood Logo" />
      </Logo>
      <Title>Viva experiências gastronômicas</Title>
      <Subtitle>no conforto da sua casa</Subtitle>
    </HeaderContainer>
  )
}

export default Header
