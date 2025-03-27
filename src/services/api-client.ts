import axios from "axios";

export interface FetchResponse<T>{
    count: number,
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '6924a28ea8fd43d1827779604778875f'
    }
})