import type React from "react"
import { HeaderContainer, Logo, Title, Subtitle } from "./Header.styles"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>efood !!</Logo>
      <Title>Viva experiências gastronômicas</Title>
      <Subtitle>no conforto da sua casa</Subtitle>
    </HeaderContainer>
  )
}

export default Header
