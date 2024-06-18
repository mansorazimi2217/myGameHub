import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuary } from "../App";

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
    metacritic : number
}
  
 

const useGames =
 (
    gameQuary : GameQuary
    // selectedGenre : Genre | null ,
    // selectedPlatform : Platform | null
  ) => useData<Game>('/games' ,
     { 
        params : 
        { 
            genres: gameQuary.genre?.id ,
            platform : gameQuary.platform?.id,
            ordering : gameQuary.sortOrder,
            search : gameQuary.SearchItem
        }
    } ,
     [gameQuary])


export default useGames

