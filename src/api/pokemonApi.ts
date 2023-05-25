import axios from "axios"

function getInstance(){
    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function get(url: string): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.get(url)
        return res.data
    } catch (error: any) {
        console.log(error.response)
        throw error     
    }
}

export function listPokemon(offset: number): Promise<any> {
    return get(`pokemon/?limit=${offset + 9}&offset=${offset === 0 ? 0 : offset+1}`)
}