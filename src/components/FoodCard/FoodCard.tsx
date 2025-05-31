import type React from "react"
import { Link } from "react-router-dom"
import type { FoodItem } from "../../models/FoodItem"
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription, CardButton, Badge } from "./FoodCard.styles"

interface FoodCardProps {
  food: FoodItem
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <Link to={`/restaurant/${food.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <CardContainer>
        <CardImage $backgroundImage={food.image}>{food.isHighlight && <Badge>Destaque</Badge>}</CardImage>
        <CardContent>
          <CardTitle>{food.title}</CardTitle>
          <CardDescription>{food.description}</CardDescription>
          <CardButton>SAIBA MAIS</CardButton>
        </CardContent>
      </CardContainer>
    </Link>
  )
}

export default FoodCard
