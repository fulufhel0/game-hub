import { useQuery } from "@tanstack/react-query";
import apiClient  from "../../services/api-client";
import GenresDataSource from "../../data/GenresDataSource";

export interface Genre{
    id: number;
    name: string;
    image_background: string
}

const client = new apiClient();

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => client.get<Genre>('/genres'),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: 0, next: null, previous: null, results: GenresDataSource }
});

export default useGenre