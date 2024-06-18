import React from "react";
import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";

interface Props {
  gameQuary: GameQuary;
}

const MyHeading = ({ gameQuary }: Props) => {
  const temp = `${gameQuary.platform?.name || ""} ${
    gameQuary.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={5}>
      {temp}
    </Heading>
  );
};

export default MyHeading;
