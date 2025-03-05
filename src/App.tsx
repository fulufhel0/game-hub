import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="gray.400">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gray.700">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue.400">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
