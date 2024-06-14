import React, { useState } from "react";
import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

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
              // seletedGenre={selectedGenre}
              seletedGenre={gameQuary.genre}
              onSelected={(genre) => setGameQuary({ ...gameQuary, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            // selectedPlatform={selectedPlatform}
            selectedPlatform={gameQuary.platform}
            onSelectPlatform={(platform) =>
              setGameQuary({ ...gameQuary, platform })
            }
            // onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <GameGrid
            // selectedPlatform={gameQuary.platform}
            // selectedGenre={gameQuary.genre}
            gameQuary={gameQuary}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
