import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import { FetchResponse } from "./useData";
import GenresDataSource from "../../data/GenresDataSource";

export interface Genre{
    id: number;
    name: string;
    image_background: string
}

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: 0, results: GenresDataSource }
});

export default useGenre