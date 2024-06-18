import { useState } from "react";
import { Show, Grid, GridItem, HStack, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import MyHeading from "./components/MyHeading";
import Footer from "./components/Footer";

export interface GameQuary {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  SearchItem: string;
}

const App = () => {
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
          <Navbar
            onSearch={(SearchItem) =>
              setGameQuary({ ...gameQuary, SearchItem })
            }
          />
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
          <Box paddingLeft={2}>
            <MyHeading gameQuary={gameQuary} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuary.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuary({ ...gameQuary, platform })
                  }
                ></PlatformSelector>
              </Box>
              <SortSelector
                sortOrder={gameQuary.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuary({ ...gameQuary, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuary={gameQuary} />
        </GridItem>
      </Grid>

      <Footer />
    </>
  );
};

export default App;
