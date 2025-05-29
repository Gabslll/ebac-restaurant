import type React from "react"
import FoodCard from "../../components/FoodCard/FoodCard"
import type { FoodItem } from "../../models"
import { HomeContainer, FoodGrid } from "./Home.styles"

const Home: React.FC = () => {
  const foodItems: FoodItem[] = [
    {
      id: 1,
      title: "Hioki Sushi",
      rating: 4.9,
      description:
        "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Japonesa",
    },
    {
      id: 2,
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Italiana",
    },
    {
      id: 3,
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Italiana",
    },
    {
      id: 4,
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Italiana",
    },
    {
      id: 5,
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Italiana",
    },
    {
      id: 6,
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
      image: "/placeholder.svg?height=217&width=472",
      isHighlight: true,
      category: "Italiana",
    },
  ]

  return (
    <HomeContainer>
      <main>
        <FoodGrid>
          {foodItems.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </FoodGrid>
      </main>
    </HomeContainer>
  )
}

export default Home
