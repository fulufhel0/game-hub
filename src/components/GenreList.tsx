import { HStack, List, ListItem, Image, Text, SkeletonText, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

interface Props{
    onSelectGenre: (genre: Genre) => void
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data, error, isLoading } = useGenres();
  
  if(error) return null;

  if(isLoading) return [1,2,3,4,5,6,7,8,9].map(item => <SkeletonText key={item} padding={4}/>);

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={4}
            />
            <Button fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
