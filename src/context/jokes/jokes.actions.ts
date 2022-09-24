import axios from "axios"

export const handleGetNewJoke = async (token: string) => {
    const url = "http://localhost:8888/.netlify/functions/getNewJoke"
    return await axios.get(url, {
        headers: {
            "Authorization": token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })    
} 