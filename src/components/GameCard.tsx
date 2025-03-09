import { Game, Platform } from './hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformsList from './PlatformsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-urls'
interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformsList platforms={game.parent_platforms.map(({platform}) => platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard