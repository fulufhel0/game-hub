import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesList from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./components/hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base: "1fr",
        lg: "300px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingLeft={4}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformFilter onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform} />
        <GamesList selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
