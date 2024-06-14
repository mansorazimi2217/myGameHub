import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGames";
import { GameQuary } from "../App";

interface Props {
  gameQuary: GameQuary;
}

export const GameGrid = ({ gameQuary }: Props) => {
  const { data, error, isLoading } = useGames(gameQuary);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonCard />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
