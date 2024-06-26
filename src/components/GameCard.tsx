import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { PlatformIconsList } from "./PlatformIconsList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import { GameCardContainer } from "./GameCardContainer";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  console.log(game.parent_platforms);
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
