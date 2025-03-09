import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesList from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./components/hooks/useGames";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setGameQuery({...gameQuery, searchText: search})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingLeft={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <DynamicHeading gameQuery={gameQuery}/>
        <Flex marginBottom={4} paddingLeft={2}>
          <Box marginRight={5}>
            <PlatformFilter
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            selectedSortOrder={gameQuery.ordering}
            onSelectedSortOrder={(order) =>
              setGameQuery({ ...gameQuery, ordering: order })
            }
          />
        </Flex>
        <GamesList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
