import type React from "react"
import type { Restaurant } from "../../models/Restaurant"
import { HeroContainer, CategoryLabel, RestaurantName, BackgroundOverlay } from "./RestaurantHero.styles"

interface RestaurantHeroProps {
  restaurant: Restaurant
}

const RestaurantHero: React.FC<RestaurantHeroProps> = ({ restaurant }) => {
  return (
    <HeroContainer $backgroundImage={restaurant.heroImage}>
      <BackgroundOverlay />
      <CategoryLabel>{restaurant.category}</CategoryLabel>
      <RestaurantName>{restaurant.name}</RestaurantName>
    </HeroContainer>
  )
}

export default RestaurantHero
