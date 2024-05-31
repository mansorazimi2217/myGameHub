import React from "react";
import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"dodgerblue"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"gold"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
