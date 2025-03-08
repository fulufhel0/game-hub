import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    slug: string;
    name: string;
}
export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform: Platform}[];
    metacritic: number
}

export default function useGames(selectedGenre: Genre | null, selectedPlatform: Platform|null){

    return useData<Game>("/games", {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre, selectedPlatform])
}