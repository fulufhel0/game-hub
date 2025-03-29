import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number,
    next: string | null,
    previous: string | null,
    results: T[]
}

 const client =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '6924a28ea8fd43d1827779604778875f'
    }
})

export default class ApiClient{
    get = <T>(path: string, options?: AxiosRequestConfig) => {
        return client.get<FetchResponse<T>>(path, options).then(res => res.data)
    }
}