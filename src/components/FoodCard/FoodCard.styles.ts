import styled from "styled-components"
import { Breakpoints, Colors } from "../../styles/theme"

export const CardContainer = styled.div`
  width: 472px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  font-family: 'Jomolhari';

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    max-width: 472px;
  }
`

export const CardImage = styled.div<{ $backgroundImage: string }>`
  position: relative;
  width: 100%;
  height: 217px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Badge = styled.span`
  background-color: ${Colors.primary};
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const CategoryBadge = styled.span`
  background-color: #4a4a4a;
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const CardContent = styled.div`
  padding: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.primary};
  margin: 0;
`

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.primary};
`

export const StarIcon = styled.span`
  font-size: 16px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: justify;
`

export const CardButton = styled.button`
  background-color: ${Colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d55555;
  }

  &:active {
    transform: scale(0.98);
  }
`
