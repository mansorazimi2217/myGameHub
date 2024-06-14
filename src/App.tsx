import React, { useState } from "react";
import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";

const App = () => {
  const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} padding={"5px"}>
            <GenreList onSelected={(genre) => setSelectGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
