"use client"

import type React from "react"
import { useState } from "react"
// import { useParams } from "react-router-dom"
import HeaderCategory from "../../components/Header/HeaderCategory"
import RestaurantHero from "../../components/RestaurantHero/RestaurantHero"
import ProductCard from "../../components/ProductCard/ProductCard"
import Footer from "../../components/Footer/Footer"
import type { Restaurant as RestaurantType } from "../../models/Restaurant"
import type { MenuItem } from "../../models/MenuItem"
import { RestaurantContainer, ProductsGrid } from "./Restaurant.styles"

import ImagemFundo from "../../assets/images/background_image.png"
import pizza from "../../assets/images/pizza.png"

const Restaurant: React.FC = () => {
  // const { id } = useParams<{ id: string }>()
  const [cartCount, setCartCount] = useState(0)

  const restaurant: RestaurantType = {
    id: 1,
    name: "La Dolce Vita Trattoria",
    category: "Italiana",
    rating: 4.6,
    description: "A autêntica cozinha italiana",
    image: "/placeholder.svg?height=217&width=472",
    heroImage: ImagemFundo,
  }

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
    {
      id: 2,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
    {
      id: 3,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
    {
      id: 4,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
    {
      id: 5,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
    {
      id: 6,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      price: 60.9,
      image: pizza,
      category: "Pizza",
    },
  ]

  const handleAddToCart = (product: MenuItem) => {
    setCartCount((prev) => prev + 1)
    console.log("Produto adicionado ao carrinho:", product)
  }

  return (
    <div>
      <HeaderCategory cartCount={cartCount} />
      <RestaurantHero restaurant={restaurant} />
      <RestaurantContainer>
        <ProductsGrid>
          {menuItems.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={handleAddToCart} />
          ))}
        </ProductsGrid>
      </RestaurantContainer>
      <Footer />
    </div>
  )
}

export default Restaurant
