import axios from "axios"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstanse = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getGames = async(): Promise<IStrapiResponse<IGame[]>> => {
    const res = await apiInstanse.get<IStrapiResponse<IGame[]>>("/games",  {
        params: {
            populate: "cover"
        },
    })
    return res.data
}

export const api = { getGames }