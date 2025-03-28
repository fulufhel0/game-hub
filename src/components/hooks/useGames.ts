import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import apiClient, { FetchResponse } from "../../services/api-client";
import { Platform } from "./usePlatforms";


export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform: Platform}[];
    metacritic: number;
    rating_top: number
}

const client = new apiClient();

export default function useGames(gameQuery: GameQuery){

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam }) => client.get<Game>('/games', {params: 
            {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.ordering,
                search: gameQuery.searchText,
                page: pageParam,
            }
        }),
        getNextPageParam: (lastPage, pages) => {
            return lastPage.next ? pages.length + 1 : undefined
        }

    });
}