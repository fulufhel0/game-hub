import genres from "../../data/GenresDataSource"

export interface Genre{
    id: number;
    name: string;
    image_background: string
}

const useGenre = () => ({data: genres, isLoading: null, error: null});

export default useGenre