import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  console.log(data);

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
            <Text fontSize="2xl">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
