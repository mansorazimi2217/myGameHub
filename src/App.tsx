import React, { useState } from "react";
import { Show, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";

export interface GameQuary {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  // const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);

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
            <GenreList
              seletedGenre={gameQuary.genre}
              onSelected={(genre) => setGameQuary({ ...gameQuary, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuary.platform}
              onSelectPlatform={(platform) =>
                setGameQuary({ ...gameQuary, platform })
              }
            ></PlatformSelector>
            <SortSelector />
          </HStack>
          <GameGrid gameQuary={gameQuary} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
