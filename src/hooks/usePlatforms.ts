import { Platform } from "./useGames"
import useData from "./useData"

interface Props{
    id : number,
    name: string,
    slug : string
}

const usePlatforms = ( ) => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;