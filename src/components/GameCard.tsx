import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { PlatformIconsList } from "./PlatformIconsList";
import { CriticScore } from "./CriticScore";
interface Props {
  game: Game;
}

const tem = [];

export const GameCard = ({ game }: Props) => {
  // for(  let i = 0 ; i < game.parent_platforms.length ;i ++){
  //   tem.push( game.parent_platforms.id );
  // }
  console.log(game.parent_platforms);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
