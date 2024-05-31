import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchedGameResponse {
  id: number;
  results: Game[];
}

export const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchedGameResponse>("/games")
      .then((response) => setGame(response.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      {game.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};
