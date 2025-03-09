import platforms from "../../data/PlatformsDataSource"
export interface Platform{
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => ({data: platforms, isLoading:null, error:null})

export default usePlatforms;
