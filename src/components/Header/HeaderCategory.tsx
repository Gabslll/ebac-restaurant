import type React from "react"
import { Link } from "react-router-dom"
import { HeaderContainer, Navigation, Logo, CartInfo } from "./HeaderCategory.styles"

interface HeaderCategoryProps {
  cartCount?: number
}

const HeaderCategory: React.FC<HeaderCategoryProps> = ({ cartCount = 0 }) => {
  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">Restaurantes</Link>
      </Navigation>
      <Logo>
        <Link to="/">efood !!</Link>
      </Logo>
      <CartInfo>{cartCount} produto(s) no carrinho</CartInfo>
    </HeaderContainer>
  )
}

export default HeaderCategory
