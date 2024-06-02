import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id : number,
    name : string,
    slug : string
}
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms :  { platform: Platform }[]

}
  
  interface FetchedGameResponse {
    id: number;
    results: Game[];
  }

const useGames =()=>{
    const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {


        const controller = new AbortController();


      apiClient
        .get<FetchedGameResponse>("/games" , { signal: controller.signal})
        .then((response) => setGame(response.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        });

      return () => controller.abort();
    } ,[]);
  
    return {game , error};
}

export default useGames;