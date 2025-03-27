import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/PlatformsDataSource"
import apiClient from "../../services/api-client";
import { FetchResponse } from "./useData";
export interface Platform{
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/list/parents').then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: 0, results: platforms }
});

export default usePlatforms;
