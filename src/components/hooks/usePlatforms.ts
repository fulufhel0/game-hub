import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/PlatformsDataSource"
import apiClient, { FetchResponse } from "../../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string
}

const client = new apiClient();

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => client.get<Platform>('/platforms/list/parents'),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: 0, next: null, previous: null, results: platforms},
});

export default usePlatforms;
