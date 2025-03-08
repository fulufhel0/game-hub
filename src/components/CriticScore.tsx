import { Badge } from "@chakra-ui/react"

interface Props{
    score: number
}

const CriticScore = ({score}: Props) => {
    const color = score > 80 ? "green" : (score > 60 ? "orange" : "red")
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius="4px">{score}</Badge>
  )
}

export default CriticScore