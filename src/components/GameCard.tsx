import { Game, Platform } from './hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformsList from './PlatformsList'
import CriticScore from './CriticScore'
interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformsList platforms={game.parent_platforms.map(({platform}) => platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard