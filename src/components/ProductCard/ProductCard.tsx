"use client"

import type React from "react"
import type { MenuItem } from "../../models/MenuItem"
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription, CardButton } from "./ProductCard.styles"

interface ProductCardProps {
  product: MenuItem
  onAddToCart: (product: MenuItem) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onAddToCart(product)
  }

  return (
    <CardContainer>
      <CardImage>
        <img src={product.image || "/placeholder.svg?height=167&width=304"} alt={product.name} />
      </CardImage>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardButton onClick={handleAddToCart}>Adicionar ao carrinho</CardButton>
      </CardContent>
    </CardContainer>
  )
}

export default ProductCard
