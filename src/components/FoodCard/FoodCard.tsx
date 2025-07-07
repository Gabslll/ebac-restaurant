import type React from "react"
import { Link } from "react-router-dom"
import type { FoodItem } from "../../models/FoodItem"
import {
  CardContainer,
  CardImage,
  BadgeContainer,
  Badge,
  CategoryBadge,
  CardContent,
  CardHeader,
  CardTitle,
  CardRating,
  StarIcon,
  CardDescription,
  CardButton,
} from "./FoodCard.styles"

interface FoodCardProps {
  food: FoodItem
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <Link to={`/restaurant/${food.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <CardContainer>
        <CardImage $backgroundImage={food.image}>
          <BadgeContainer>
            {food.isHighlight && <Badge>Destaque da semana</Badge>}
            <CategoryBadge>{food.category}</CategoryBadge>
          </BadgeContainer>
        </CardImage>
        <CardContent>
          <CardHeader>
            <CardTitle>{food.title}</CardTitle>
            <CardRating>
              {food.rating}
              <StarIcon>⭐</StarIcon>
            </CardRating>
          </CardHeader>
          <CardDescription>{food.description}</CardDescription>
          <CardButton>Saiba mais</CardButton>
        </CardContent>
      </CardContainer>
    </Link>
  )
}

export default FoodCard
